import React from 'react'
import Image from 'next/image'
import { Bell, MessageSquareMore, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Product from '@/components/Product'
import Footer from '@/components/Footer'
import { fetchProducts } from '@/actions/products'
import Category from '@/components/Category'
import { fetchCategories } from '@/actions/categories'

const Homepage = async () => {
  const products = await fetchProducts()
  const categories = await fetchCategories()
  return (
    <div className='h-svh w-screen px-4 py-2 space-y-2'>
      {/* HEADER */}
      <div className="h-[100px] w-full flex items-center justify-between">
        {/* USER */}
        <div className="flex gap-2">
          <div>
          <Image src='/mango-table.jpg' width={50} height={50} alt='' className='rounded-full border shadow-black shadow-sm'/>
          </div>
          <div className="">
            <p className='text-center'>Welcome</p>
            <h3 className="text-lg font-bold">Viking Master</h3>
          </div>
        </div>
        {/* ICONS */}
        <div className="flex h-full justify-center items-center gap-2">
          <div className="rounded-full border flex justify-center items-center p-2 ">
            <Bell size={24} color='#305cde' />
          </div>
          <div className="rounded-full border flex justify-center items-center p-2">
            <MessageSquareMore size={24} color='#305cde' />
          </div>
          <div className="rounded-full border flex justify-center items-center p-2">
            <ShoppingCart size={24} color='#305cde' />
          </div>
        </div>
      </div>
      {/* SEARCH BAR */}
      <div className=" flex gap-4">
      <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
      
      {/* CATEGORIES */}
      <p className='text-xl font-bold'>Categories</p>
      <div className="grid grid-cols-3 gap-2 ">
        {
          categories.map((category) => (
            <Category key={category.slug} category={category} />
          ))
        }    
      </div>
      {/* HEADING */}
      <div className="flex justify-between">
        <p className='text-xl font-bold'>Popular</p>
        <Link href='/products' className='text-blue-500'>See All</Link>
      </div>
      {/* PRODUCTS */}
      <div className="grid grid-cols-2 gap-1">
      {
        products.map((product) => (
          <Product key={product.id} product={product}/>
        ))
      }
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Homepage