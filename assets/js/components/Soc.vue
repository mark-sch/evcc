<template>
	<div class="btn-group btn-group-toggle bg-white shadow-none">
		<label class="btn btn-outline-primary disabled caption font-weight-bold" v-if="caption">
			Prio
		</label>
		<label
			class="btn btn-outline-primary"
			v-for="(level, id) in levelsOrDefault"
			:key="id"
			:level="level"
			:id="id"
			:class="{ active: soc == level, first: !caption && id == 0 }"
		>
			<input type="radio" :value="level" v-on:click="setTargetSoC(level)" />{{ level }}%
		</label>
	</div>
</template>

<script>
export default {
	name: "Soc",
	props: {
		soc: Number,
		caption: Boolean,
		levels: Array,
	},
	computed: {
		levelsOrDefault: function () {
			if (this.levels == null || this.levels.length == 0) {
				return []; // disabled, or use 30, 50, 80, 100
			}
			return this.levels;
		},
	},
	methods: {
		setTargetSoC: function (mode) {
			this.$emit("updated", mode);
		},
	},
};
</script>
