import React from 'react'
import Image from 'next/image'
import { Bell, MessageSquareMore, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Product from '@/components/Product'

const Homepage = () => {
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
          <div className="rounded-full border ">
            <Bell size={32} color='#305cde' />
          </div>
          <div className="rounded-full border">
            <MessageSquareMore size={32} color='#305cde' />
          </div>
          <div className="rounded-full border p-1">
            <ShoppingCart size={32} color='#305cde' />
          </div>
        </div>
      </div>
      {/* SEARCH BAR */}
      <div className=" flex gap-4">
      <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
      {/* HEADING */}
      <div className="flex justify-between">
        <p className='text-xl font-bold'>Popular</p>
        <Link href='/products' className='text-blue-500'>See All</Link>
      </div>
      {/* PRODUCTS */}
      <div className="grid gap-1">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </div>
    </div>
  )
}

export default Homepage