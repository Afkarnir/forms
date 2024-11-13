<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps(['person'])

const keys = computed(() => Object.keys(props.person))
const values = computed(() => Object.values(props.person))

const adressEntries = computed(() => Object.entries(props.person.address))
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
            <li v-for="adress in adressEntries">
                <span>{{ adress[0] }} :</span>
                <span>{{ adress[1] }}</span>
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