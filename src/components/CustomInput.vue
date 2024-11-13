<script setup lang="ts">
import type { PropType } from 'vue';
import type { CustomComponent } from '../model';

defineProps({
    component: {
        type: Object as PropType<CustomComponent>,
        required: true
    }
})
const model = defineModel()

function updateModel(event: Event) {
    model.value = (event.target as HTMLInputElement).value
}
</script>

<template>
    <label>
        <span>{{ component.label }}</span>
        <input :type="component.type" :id="component.key" :value="model" @change="updateModel($event)" :disabled="component.disabled" :required="component.required">
    </label>
</template>

<style scoped>
label {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>