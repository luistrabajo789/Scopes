import React from 'react'
import Layout from 'components/Layout/Layout'
import Header from 'components/home/Header'
import About from 'components/home/About'
import Remote from 'components/home/Remote'

import Contact from 'components/home/Contact'
import Servicios from 'components/home/Servicios'

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
