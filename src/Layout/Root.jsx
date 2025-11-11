import React from 'react'
import Header from '../Components/Header'
import Home from '../Pages/Home'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root