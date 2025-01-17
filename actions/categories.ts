'use server'
import { ICategory } from "@/types/types"

export const fetchCategories = async () => {
    const API = 'https://market-hazel.vercel.app/api/categories'
    try {
        const response = await fetch(API)
        const categories = await response.json()
        return categories.data as ICategory[]
    } catch (error) {
        console.log(error)
        return []
    }
}