<script setup lang="ts">
import { defineProps, defineModel } from 'vue';

const props = defineProps(['component', 'value'])
const model = defineModel()
</script>

<template>
    <label>
        <span>{{ props.component.label }}</span>
        <select :id="props.component.key" :value="props.value">
            <option v-for="item in props.component.options.items" :value="item.value">{{ item.label }}</option>
        </select>
    </label>
</template>