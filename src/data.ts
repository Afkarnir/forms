import type { Form } from "@/model";

export async function getData(file: string): Promise<Form> {
    const response = await fetch(`http://localhost:5173/${file}`)
    const data: Form = await response.json();
    return data;
}