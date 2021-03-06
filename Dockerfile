# STEP 1 build ui
FROM node:14-alpine as node

RUN apk update && apk add --upgrade grep --no-cache make && apk add bash

WORKDIR /build

# install node tools
COPY Makefile .
COPY git-branch-status /bin/
COPY package*.json ./
RUN make install-ui

# build ui
COPY assets assets
COPY vue.config.js vue.config.js
COPY .eslintrc.js .eslintrc.js
RUN make clean ui


# STEP 2 build executable binary
FROM golang:1.16-alpine as builder

# Install git + SSL ca certificates.
# Git is required for fetching the dependencies.
# Ca-certificates is required to call HTTPS endpoints.
RUN apk update && apk add --upgrade grep --no-cache git bash ca-certificates tzdata alpine-sdk && update-ca-certificates

WORKDIR /build

# install go tools and cache modules
COPY Makefile .
COPY git-branch-status /bin/
COPY go.mod .
COPY go.sum .
RUN make install
RUN go mod download

# prepare
COPY . .
RUN make assets

# copy ui
COPY --from=node /build/dist /build/dist

# build
RUN make build


# STEP 3 build a small image including module support
FROM alpine:3.13

WORKDIR /app

ENV TZ=Europe/Berlin

# Import from builder
COPY --from=builder /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /build/evcc /usr/local/bin/evcc

COPY docker/bin/* /evcc/

EXPOSE 7070

HEALTHCHECK --interval=60s --start-period=60s --timeout=30s --retries=3 CMD [ "evcc", "health" ]

ENTRYPOINT [ "/evcc/entrypoint.sh" ]
CMD [ "evcc" ]
