<template>
	<div class="box">
		<input type="text" v-model="input" />
		<button @click="add">点击+1</button>
		<div>结果为：{{ input }}</div>
	</div>
</template>
<script setup>
import { ref } from '@vue/composition-api';
const input = ref('');
const add = () => {
	const v = +input.value;
	input.value = v + 1;
};
</script>
