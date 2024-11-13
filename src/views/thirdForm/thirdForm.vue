<script setup lang="ts">
import CustomForm from '@/components/CustomForm.vue'
import { getData } from '@/data';
import { state } from '@/store';
import { ref, onMounted, onUnmounted } from 'vue';

const loading = ref(true);

onMounted(() => {
    getData('json3.json').then(res => {
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
    <h1>Formulaire 3</h1>
    <CustomForm v-if="!loading"></CustomForm>
</template>