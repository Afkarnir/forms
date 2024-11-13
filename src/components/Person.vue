<script setup lang="ts">
// import { Person } from '../model';
import { computed } from 'vue';

const props = defineProps({
    person: Object
})
</script>

<template>
    <ul v-for="(value, key) in person">
        <ul v-if="key === 'phones'">
            <li v-for="data in value">
                <span>{{ data.type }} :</span>
                <span>{{ data.number }}</span>
            </li>
        </ul>

        <ul v-else-if="key === 'address'">
            <li v-for="(value, key) in person.address">
                <span>{{ key }} :</span>
                <span>{{ value }}</span>
            </li>
        </ul>
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