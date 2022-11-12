import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return <>
  <div className='Nav'>
    <ul className='d-flex'>
        <li className='m-3'><Link  to="aboute" >aboute</Link></li>
        <li className='m-3'><Link  to="Contacts" >Contacts</Link></li>
        <li className='m-3'><Link  to="Child" >Child</Link></li>
        <li className='m-3'><Link  to="Gallery" >Gallery</Link></li>
      
    </ul>
  </div>
  
  
  </>
}
