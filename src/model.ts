export type Form = {
    data: {
        [key: string]: DataValue | DataName | Project | DataPerson
    },
    form: {
        components: CustomComponent[],
    }
}

export type DataValue = {
    value: string
}

export type DataName = {
    name: string,
}

export interface Project extends DataName {
    tasks: string[],
}

export type CustomComponent = {
    type: 'input' | 'select' | 'person' | 'button' | 'list',
    key: string,
    label: string,
    disabled?: boolean,
    required?: boolean,
    validation?: 'email',
}

export interface CustomSelectComponent extends CustomComponent {
    options: {
        items: {
            value: string,
            label: string,
        }[]
    }
}

export interface CustomListComponent extends CustomComponent {
    components: CustomComponent[]
}

export type DataPerson = {
    name: string,
    age: number,
    gender: string,
    address: Address,
    phones: Phone[],
    email: string,
    projects?: string[],
    notes?: string[],
}

export type Address = {
    street: string,
    city: string,
    state: string,
    zip: string,
}

export type Phone = {
    type: string,
    number: string,
}