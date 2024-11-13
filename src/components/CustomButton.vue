<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true
    },
    keyValue: {
        type: String,
        required: true
    },
})
</script>

<template>
    <button type="button" :id="keyValue">{{ label }}</button>
</template>
