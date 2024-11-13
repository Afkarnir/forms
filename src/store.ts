import type { CustomComponent, CustomListComponent, DataValue, Form } from "@/model";
import { reactive } from "vue";
import { required, email, numeric } from '@vuelidate/validators'

export const state = reactive({
    data: {} as Form,
    form: {} as {[key: string]: any},
    rules: {} as {[key: string]: any},
    setForm(data: Form) {
        const formAndRules = setFormAndRules(data.form.components, data, {}, {});
        this.form = formAndRules.form;
        this.rules = formAndRules.rules;
    },

    clear() {    
        this.data = {} as Form;
        this.form = {};
        this.rules = {};
    },
})

function setFormAndRules(
    components: CustomComponent[],
    data: Form,
    currentForm: {[key: string]: any},
    currentRules: {[key: string]: any}
): { form: {[key: string]: string}, rules: {[key: string]: string} } {
    components.filter(component => component.type !== 'person' && component.type !== 'button').forEach(component => {
        currentRules[component.key] = {};

        if(component.type === 'list') {
            currentForm[component.key] = {};
            return setFormAndRules((component as CustomListComponent).components, data, currentForm[component.key], currentRules[component.key]);
        }

        currentForm[component.key] = (data.data[component.key] as DataValue)?.value || '';

        if(component.required) {
            currentRules[component.key].required = required;
        }

        switch(component.validation) {
            case 'email':
                currentRules[component.key].email = email;
                break;
            case 'number':
                currentRules[component.key].number = numeric;
                break;
        }
    })

    return { form: currentForm, rules: currentRules}
}