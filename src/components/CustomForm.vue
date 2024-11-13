<script setup lang="ts">
import type { CustomSelectComponent, DataPerson, DataValue } from '@/model.js';
import CustomSelect from '@/components/CustomSelect.vue'
import CustomButton from '@/components/CustomButton.vue'
import Person from '@/components/Person.vue'
import List from '@/components/List.vue'
import CustomInput from '@/components/CustomInput.vue'
import { state } from '@/store'
import { useVuelidate } from '@vuelidate/core'

const form = state.form
const rules = state.rules

const v$ = useVuelidate(rules, form)

async function checkForm(event: Event) {
    event.preventDefault()
    const validation = await v$.value.$validate()
    
    if (!validation) {
        return console.error('Formulaire non valide')
    } else {
        console.log(JSON.stringify(form))
    }
}
</script>

<template>
    <form @submit="checkForm">
        <template v-for="component in state.data.form.components">
            <CustomSelect v-if="component.type === 'select'" :component="component as CustomSelectComponent" v-model="form[component.key]"></CustomSelect>

            <CustomButton v-else-if="component.type === 'button'" :label="component.label" :keyValue="component.key"></CustomButton>

            <Person v-else-if="component.type === 'person'" :person="state.data.data[component.key] as DataPerson"></Person>

            <List v-else-if="component.type === 'list'" :list="component" :form="state.form[component.key]"></List>

            <CustomInput v-else :component="component" v-model="form[component.key]"></CustomInput>
        </template>

        <div class="errors" v-for="error in v$.$errors">
            <span>{{ error.$message }}</span>
        </div>

        <button type="submit">Submit</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    max-width: 300px;

    padding: 16px;
    border: 1px solid white;
}

.errors {
    color: red;
}
</style>