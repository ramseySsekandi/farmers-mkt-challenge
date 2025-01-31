'use client'
import { House, Leaf, ShoppingCart, SprayCan, UsersRound } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
    const footerLinks = [
        { icon: <House />, label: 'Home', url: '/homepage',},
        { icon: <SprayCan />, label: 'Fresh', url: '/fresh-mkt', },
        { icon: <Leaf />, label: 'Start', url: '/' },
        { icon: <ShoppingCart />, label: 'Cart', url:'/cart' },
        { icon: <UsersRound />, label: 'Products', url: '/products' },
      ];
      const pathName = usePathname();
  return (
        <div className="fixed text-gray-500 bg-white bottom-0 left-0 right-0 p-2 w-full flex gap-4 justify-evenly items-center">
            {/* FOOTER ICONS */}
            {
                footerLinks.map((item) =>(
                <Link href={item.url} className={`${pathName === item.url ? 'text-blue-700':''} flex flex-col justify-center items-center`} key={item.label}>
                    {item.icon}
                    <p>{item.label}</p>
                </Link>
                ))
            }
        </div>
  )
}

export default Footer