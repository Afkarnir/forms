<script setup lang="ts">
import type { CustomSelectComponent, DataPerson, DataValue } from '@/model.js';
import CustomSelect from '@/components/CustomSelect.vue'
import CustomButton from '@/components/CustomButton.vue'
import Person from '@/components/Person.vue'
import CustomInput from '@/components/CustomInput.vue'
import { state } from '@/store'

defineProps({
    list: {
        type: Object as CustomListComponent,
        required: true
    },
    form: {
        type: Object as {[key: string]: any},
        required: true
    }
})
</script>

<template>
    <div class="list-container">
        <template v-for="component in list.components">
            <CustomSelect v-if="component.type === 'select'" :component="component as CustomSelectComponent" v-model="form[component.key]"></CustomSelect>

            <CustomButton v-else-if="component.type === 'button'" :label="component.label" :keyValue="component.key"></CustomButton>

            <Person v-else-if="component.type === 'person'" :person="state.data.data[component.key] as DataPerson"></Person>

            <List v-else-if="component.type === 'list'" :list="component" :form="form[component.key]"></List>

            <CustomInput v-else :component="component" v-model="form[component.key]"></CustomInput>
        </template>
    </div>
</template>

<style scoped>
.list-container {
    padding: 8px;
    border: 1px solid white;
}
</style>