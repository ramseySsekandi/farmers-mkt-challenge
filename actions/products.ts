'use server'

import { IProductProp } from "@/types/types"

const API = 'https://market-hazel.vercel.app/api/products'

export const fetchProducts = async () => {
try {
    const response = await fetch(API)
    const Products = await response.json()
    console.log(Products)
    return Products.data as IProductProp[]
} catch (error) {
    console.log(error)
    return []
}
}