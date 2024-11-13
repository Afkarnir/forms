<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { state } from '@/store';
import type { Project, DataName, DataValue } from '@/model';

defineProps({
    table: {
        type: Object as PropType<string[]>,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})

const data = computed(() => state.data.data)

function getValueOrName(value: DataName | DataValue): string {
    if ((value as DataName).name) {
        return (value as DataName).name
    }
    
    return (value as DataValue).value
}
</script>

<template>
    <span>{{ label }} :</span>
    <ul>
        <template v-for="field in table">
            <li v-if="data[field]"> 
                {{ getValueOrName(data[field]) }}
            </li>

            <TableDataValue v-if="data[field]?.tasks" :table="data[field].tasks" label="tasks"></TableDataValue>
        </template>
    </ul>
</template>