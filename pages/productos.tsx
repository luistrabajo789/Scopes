import React from 'react'
import image420x260 from 'public/420x260.png'
import image421x261 from 'public/421x261.png'
import image422x262 from 'public/422x262.png'
import image423x263 from 'public/423x263.png'
import image424x264 from 'public/424x264.png'
import image425x265 from 'public/425x265.png'
import image427x267 from 'public/427x267.png'
import image428x268 from 'public/428x268.png'
import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/Layout/Layout'

export default function productos() {
  return (
    <Layout>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image  alt="ecommerce" className="object-cover object-center w-full h-full block" src={image420x260}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image  alt="ecommerce" className="object-cover object-center w-full h-full block" src={image421x261}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image  alt="ecommerce" className="object-cover object-center w-full h-full block" src={image422x262}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image  alt="ecommerce" className="object-cover object-center w-full h-full block" src={image423x263}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image  alt="ecommerce" className="object-cover object-center w-full h-full block" src={image424x264}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image  alt="ecommerce" className="object-cover object-center w-full h-full block" src={image425x265}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image  alt="ecommerce" className="object-cover object-center w-full h-full block" src={image427x267}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <Link href='#' className="block relative h-48 rounded overflow-hidden">
            <Image  alt="ecommerce" className="object-cover object-center w-full h-full block" src={image428x268}/>
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Layout>  
  )
}
