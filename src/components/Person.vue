<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { DataPerson, Phone } from '../model';
import { state } from '@/store';
import TableDataValue from './TableDataValue.vue';

defineProps({
    person: {
        type: Object as PropType<DataPerson>,
        required: true,
    }
})

const data = computed(() => state.data.data)
</script>

<template>
    <ul v-for="(value, key) in person">
        <ul v-if="key === 'phones'">
            <li v-for="phoneData in value as Phone[]">
                <span>{{ phoneData.type }} :</span>
                <span>{{ phoneData.number }}</span>
            </li>
        </ul>

        <template v-else-if="key === 'address'">
            <span>{{ key }} :</span>
            <ul>
                <li v-for="(value, key) in person.address">
                    <span>{{ key }} :</span>
                    <span>{{ value }}</span>
                </li>
            </ul>
        </template>

        <template v-else-if="key === 'projects' || key === 'notes'">
            <TableDataValue :table="value as string[]" :label="key" />
        </template>
        
        <li v-else>
            <span>{{ key }} :</span>
            <span>{{ value }}</span>
        </li>
    </ul>
</template>

<style scoped>
li {
    display: flex;
    gap: 10px;
}
</style>