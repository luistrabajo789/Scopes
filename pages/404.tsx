import Link from 'next/link'
import React from 'react'

export default function Custom404() {
  return (
    <section id="404" className='bgheader1 grid h-screen w-full '>
    <div className='grid place-content-center gap-3'>
        <h1 className='text-9xl font-bold text-secondary-100 text-center'>404</h1>
        <h2 className='text-2xl text-slate-800'>Pagina no encontrada o no existe</h2>
        <Link className='text-center text-gray-700' href='/'>Volver a inicio</Link>
    </div>
</section>
  )
}
