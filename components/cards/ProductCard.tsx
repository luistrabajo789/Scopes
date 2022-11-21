import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ObjectCardProducts } from 'utils/dataPages/dataProducts'

export default function ProductCard({image,titleCardProduct,descriptionCard,category,price,link}:ObjectCardProducts) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image width={100} height={100} alt={titleCardProduct} className="object-cover object-center  block" src={image}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{titleCardProduct}</h2>
            <p className="mt-1">${price}</p>
          </div>
        </div>
  )
}
