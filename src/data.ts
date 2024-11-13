import type { FirstForm } from "@/model";

export async function getData(file: string): Promise<FirstForm> {
    const response = await fetch(`http://localhost:5173/${file}`)
    const data: FirstForm = await response.json();
    return data;
}