<template>
	<div class="app d-flex flex-column justify-content-between">
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container">
					<a class="navbar-brand" href="https://www.sunny5.de" target="_new"
						><img src="ico/favicon-32x32.png" alt="Sunny5 Logo"
					/></a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div class="navbar-nav mr-auto"></div>
						<div class="navbar-nav">
							<a
								v-if="hasSunny5Menu()"
								class="nav-item nav-link pb-1"
								href="../smartbox/"
								>Home
							</a>
							<router-link class="nav-item nav-link pb-1" to="/">E-Auto</router-link>
							
							<span v-if="hasSunny5Menu()" v-html="getVisLink()"></span>
							<span v-if="hasSunny5Menu()" v-html="getGrafanaLink()"></span>
							<span v-if="hasSunny5Menu()" v-html="getLoginLink()"></span>
						</div>
					</div>
				</div>
			</nav>

			<router-view></router-view>
		</div>
		<Footer :version="version"></Footer>
	</div>
</template>

<script>
import "../icons";
import formatter from "../mixins/formatter";
import Footer from "../components/Footer";
import store from "../store";

export default {
	name: "App",
	components: { Footer },
	data: function () {
		return {
			compact: false,
			store: this.$root.$data.store,
			installedVersion: window.evcc.version,
		};
	},
	methods: {
		connect: function () {
			const loc = window.location;
			const protocol = loc.protocol == "https:" ? "wss:" : "ws:";
			const uri =
				protocol +
				"//" +
				loc.hostname +
				(loc.port ? ":" + loc.port : "") +
				loc.pathname +
				"ws";
			const ws = new WebSocket(uri),
				self = this;
			ws.onerror = function () {
				ws.close();
			};
			ws.onclose = function () {
				window.setTimeout(self.connect, 1000);
			};
			ws.onmessage = function (evt) {
				try {
					var hashCode = function (s) {
						return (
							"Msg" +
							Math.abs(
								s.split("").reduce((a, b) => {
									a = (a << 5) - a + b.charCodeAt(0);
									return a & a;
								}, 0)
							)
						);
					};
					var msg = JSON.parse(evt.data);

					if (window.throttledToasts[hashCode(evt.data)] == undefined)
						window.throttledToasts[hashCode(evt.data)] = store.update.throttle(10000);
					//store.update(msg);
					window.throttledToasts[hashCode(evt.data)](msg);
				} catch (e) {
					window.toasts.error(e, evt.data);
				}
			};
		},
	},
	computed: {
		version: function () {
			return {
				installed: this.installedVersion,
				available: this.store.state.availableVersion,
				releaseNotes: this.store.state.releaseNotes,
				hasUpdater: this.store.state.hasUpdater,
				uploadMessage: this.store.state.uploadMessage,
				uploadProgress: this.store.state.uploadProgress,
			};
		},
	},
	created: function () {
		const urlParams = new URLSearchParams(window.location.search);
		this.compact = urlParams.get("compact");
		this.connect(); // websocket listener
	},
	mixins: [formatter],
};
</script>
<style scoped>
.logo {
	width: 85px;
}
.app {
	min-height: 100vh;
}
</style>
