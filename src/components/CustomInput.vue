<script setup lang="ts">
import { CustomComponent } from '../model';
import { defineProps, defineModel } from 'vue';

const props = defineProps({
    component: Object as CustomComponent,
    value: String
})
const model = defineModel()
</script>

<template>
    <label>
        <span>{{ props.component.label }}</span>
        <input :type="props.component.type" :id="props.component.key" :value="props.value" @change="model = $event.target.value">
    </label>
</template>

<style scoped>
label {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>