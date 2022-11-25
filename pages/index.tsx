import React from 'react'
import Layout from 'components/Layout/Layout'
import Header from 'components/home/Header'
import About from 'components/home/About'
import Remote from 'components/home/Remote'

import Contact from 'components/home/Contact'
import Servicios from 'components/home/Servicios'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

export default function Index() {
  return (
    <Layout>
      <Header/>
      <About/>
      <Remote/>
      <Servicios/>
      <Contact/>
    </Layout>
  )
}


export async function getServerSideProps(context:any) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)
 
  if(session){
    return{
      redirect:{
        destination:'/dashboard',
        permanent:false
      }
    }
  }return{
    props: {
      session
    }
  }
  
}
