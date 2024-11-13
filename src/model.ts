export type FirstForm = {
    data: {
        [key: string]: {
            value: string
        } | Person
    },
    form: {
        components: CustomComponent[],
    }
}

export type CustomComponent = {
    type: string,
    key: string,
    label: string,
    disabled: boolean,
}

export type Person = {
    name: string,
    age: number,
    gender: string,
    address: {
        street: string,
        city: string,
        state: string,
        zip: string,
    },
    phones: {
        type: string,
        number: string,
    }[],
    email: string,
}