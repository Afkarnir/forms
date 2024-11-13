<script setup lang="ts">
import { getData } from '../../data.ts'
import { ref, reactive, onMounted } from 'vue'
import CustomInput from '../../components/CustomInput.vue'
import CustomSelect from '../../components/CustomSelect.vue'
import CustomButton from '../../components/CustomButton.vue'
import Person from '../../components/Person.vue'

const data = reactive({})

let form = {}

onMounted(() => {
    getData('json1.json').then(res => {
        Object.assign(data, res)

        res.form.components.filter(component => component.type !== 'person' && component.type !== 'button').forEach(component => {
            form[component.key] = data.data[component.key].value
        })
    })
})

</script>

<template>
    <h1>formulaire 1</h1>
    <form v-if="data.data">

        <template v-for="component in data.form.components">
            <CustomSelect v-if="component.type === 'select'" :component="component" :value="data.data[component.key].value" v-model="form[component.key]"></CustomSelect>

            <CustomButton v-else-if="component.type === 'button'" :label="component.label" :keyValue="component.key"></CustomButton>

            <Person v-else-if="component.type === 'person'" :person="data.data[component.key]"></Person>

            <CustomInput v-else :component="component" :value="data.data[component.key].value" v-model="form[component.key]"></CustomInput>
        </template>

        <button type="button" @click="console.log(form)">Submit</button>
    </form>
    
</template>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    max-width: 300px;
}
</style>