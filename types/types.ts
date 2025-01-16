export interface IProductProp {
    id: string,
    title: string,
    slug: string,
    description: string,
    rating: string[],
    price: number,
    quantity: number,
    images: string[],
    createdAt: string,
    updatedAt: string,
    categoryId: string
  }