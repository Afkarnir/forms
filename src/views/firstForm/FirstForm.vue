<script setup>
import { getData } from './firstForm'
import { ref, reactive, onMounted } from 'vue'

const data = reactive({})

onMounted(() => {
    getData().then(res => {
        data = res
        
        console.log(data)
    })
})

</script>

<template>

</template>

<style>
</style>