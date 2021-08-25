<template>
	<div>the message is {{ message }}</div>
</template>
<script setup>
const props = defineProps({
	message: String,
});
console.log(props);
</script>
