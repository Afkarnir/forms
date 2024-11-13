<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    label: String,
    value: String
})
</script>

<template>
    <button type="button" :id="props.keyValue">{{ props.label }}</button>
</template>

<style scoped>
</style>
