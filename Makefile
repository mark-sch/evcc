.PHONY: default all clean install install-ui ui assets lint lint-ui test build test-release release
.PHONY: docker publish-testing publish-latest publish-images
.PHONY: prepare-image image-rootfs image-update
.PHONY: soc server server-image

COMMITS_AHEAD := $(shell bash git-branch-status master upstream/master | grep -oP  '(?<=ahead )[0-9]+')
TAG_NAME := $(shell date +%Y).$(shell date +%-m).$(COMMITS_AHEAD)
SHA := $(shell test -d .git && git rev-parse --short HEAD)
VERSION := $(if $(TAG_NAME),$(TAG_NAME),$(SHA))
BUILD_DATE := $(shell date -u '+%Y-%m-%d_%H:%M:%S')
BUILD_TAGS := -tags=release
LD_FLAGS := -X github.com/mark-sch/evcc/server.Version=$(VERSION) -X github.com/mark-sch/evcc/server.Commit=$(SHA) -s -w
BUILD_ARGS := -ldflags='$(LD_FLAGS)'

# docker
DOCKER_IMAGE := think5/evcc
ALPINE_VERSION := 3.13
TARGETS := arm.v6,arm.v8,amd64

# image
IMAGE_FILE := evcc_$(TAG_NAME).image
IMAGE_ROOTFS := evcc_$(TAG_NAME).rootfs
IMAGE_OPTIONS := -hostname evcc -http_port 8080 github.com/gokrazy/serial-busybox github.com/gokrazy/breakglass github.com/mark-sch/evcc

default: build

all: clean install install-ui ui assets lint lint-ui test build

clean:
	rm -rf dist/

install:
	go install github.com/golang/mock/mockgen

install-ui:
	npm ci

ui:
	npm run build

assets:
	go generate ./...

lint:
	golangci-lint run

lint-ui:
	npm run lint

test:
	@echo "Running testsuite"
	go test ./...

build:
	@echo Version: $(VERSION) $(BUILD_DATE)
	go build -v $(BUILD_TAGS) $(BUILD_ARGS)

release-test:
	goreleaser --snapshot --skip-publish --rm-dist

release:
	goreleaser --rm-dist

docker:
	@echo Version: $(VERSION) $(BUILD_DATE)
	docker build --tag $(DOCKER_IMAGE):testing .

publish-testing:
	@echo Version: $(VERSION) $(BUILD_DATE)
	#sudo docker login -u $DOCKER_USER -p $DOCKER_PASS
	seihon publish --dry-run=false --template docker/tmpl.Dockerfile --base-runtime-image alpine:$(ALPINE_VERSION) \
	   --image-name $(DOCKER_IMAGE) -v "testing" --targets=$(TARGETS)

publish-latest:
	@echo Version: $(VERSION) $(BUILD_DATE)
	#sudo docker login -u $DOCKER_USER -p $DOCKER_PASS
	seihon publish --dry-run=false --template docker/tmpl.Dockerfile --base-runtime-image alpine:$(ALPINE_VERSION) \
	   --image-name $(DOCKER_IMAGE) -v "latest" --targets=$(TARGETS)

publish-tag:
	@echo Version: $(VERSION) $(BUILD_DATE)
	#sudo docker login -u $DOCKER_USER -p $DOCKER_PASS
	seihon publish --dry-run=false --template docker/tmpl.Dockerfile --base-runtime-image alpine:$(ALPINE_VERSION) \
	   --image-name $(DOCKER_IMAGE) -v "$(TAG_NAME)" --targets=$(TARGETS)

publish-images:
	@echo Version: $(VERSION) $(BUILD_DATE)
	seihon publish --dry-run=false --template docker/tmpl.Dockerfile --base-runtime-image alpine:$(ALPINE_VERSION) \
	   --image-name $(DOCKER_IMAGE) -v "latest" -v "$(TAG_NAME)" --targets=$(TARGETS)

prepare-image:
	go get github.com/gokrazy/tools/cmd/gokr-packer@latest
	mkdir -p flags/github.com/gokrazy/breakglass
	echo "-forward=private-network" > flags/github.com/gokrazy/breakglass/flags.txt
	mkdir -p buildflags/github.com/mark-sch/evcc
	echo "$(BUILD_TAGS),gokrazy" > buildflags/github.com/mark-sch/evcc/buildflags.txt
	echo "-ldflags=$(LD_FLAGS)" >> buildflags/github.com/mark-sch/evcc/buildflags.txt

image:
	gokr-packer -overwrite=$(IMAGE_FILE) -target_storage_bytes=1258299392 $(IMAGE_OPTIONS)
	loop=$$(sudo losetup --find --show -P $(IMAGE_FILE)); sudo mkfs.ext4 $${loop}p4
	gzip -f $(IMAGE_FILE)

image-rootfs:
	gokr-packer -overwrite_root=$(IMAGE_ROOTFS) $(IMAGE_OPTIONS)
	gzip -f $(IMAGE_ROOTFS)

image-update:
	gokr-packer -update yes $(IMAGE_OPTIONS)

soc:
	@echo Version: $(VERSION) $(BUILD_DATE)
	go build -o evcc-soc $(BUILD_TAGS) $(BUILD_ARGS) github.com/mark-sch/evcc/soc/client

server:
	@echo Version: $(VERSION) $(BUILD_DATE)
	go build -o soc-server $(BUILD_TAGS) $(BUILD_ARGS) github.com/mark-sch/evcc/soc/server

publish-server:
	docker build -f soc/Dockerfile --platform linux/amd64 -t mark-sch/evcc-cloud .
	docker push mark-sch/evcc-cloud
