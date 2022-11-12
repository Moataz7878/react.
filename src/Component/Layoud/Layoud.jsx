import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
import Nav from '../Nav/Nav'

export default function Layoud() {
  return <>
  <Nav/>
  <Outlet></Outlet>
  <Footer/>
  </>
    
  
}
