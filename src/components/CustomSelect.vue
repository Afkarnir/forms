<script setup lang="ts">
import type { CustomSelectComponent } from '@/model';
import type { PropType } from 'vue';

defineProps({
    component: {
        type: Object as PropType<CustomSelectComponent>,
        required: true
    }
})
const model = defineModel()

function updateModel(event: Event) {
    model.value = (event.target as HTMLSelectElement).value
}
</script>

<template>
    <label>
        <span>{{ component.label }}</span>
        <select :id="component.key" :value="model" @change="updateModel($event)" :disabled="component.disabled" :required="component.required">
            <option v-for="item in component.options?.items" :value="item.value">{{ item.label }}</option>
        </select>
    </label>
</template>