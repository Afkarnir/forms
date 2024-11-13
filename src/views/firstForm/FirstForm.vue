<script setup lang="ts">
import { getData } from '../../data'
import { onMounted, onUnmounted, ref } from 'vue'
import CustomForm from '../../components/CustomForm.vue'
import { state } from '@/store'

const loading = ref(true);

onMounted(() => {
    getData('json1.json').then(res => {
        state.data = res
        state.setForm(res)
        loading.value = false
    })
})

onUnmounted(() => {
    state.clear()
})

</script>

<template>
    <h1>Formulaire 1</h1>
    <CustomForm v-if="!loading"></CustomForm>
</template>