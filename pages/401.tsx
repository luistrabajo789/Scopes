import Link from 'next/link'
import React from 'react'

export default function Custom404() {
  return (
    <section id="404" className='bgheader1 grid h-screen w-full '>
    <div className='grid place-content-center gap-3'>
        <h1 className='text-9xl font-bold text-secondary-100 text-center'>401</h1>
        <h2 className='text-2xl text-slate-800 text-center'>Lo sentimos, no tienes autorizacion para entrar aqui</h2>
        <Link className='text-center text-secondary-100 text-lg' href='/login'>iniciar sesion</Link>
    </div>
</section>
  )
}
