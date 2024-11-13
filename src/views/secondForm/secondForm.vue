<script setup lang="ts">
import { getData } from '../../data.ts'
import { ref, reactive, onMounted } from 'vue'

const data = reactive({})

onMounted(() => {
    getData('json2.json').then(res => {
        Object.assign(data, res)
    })
})
</script>

<template>
    <h1>formulaire 2</h1>
</template>

<style scoped>
</style>