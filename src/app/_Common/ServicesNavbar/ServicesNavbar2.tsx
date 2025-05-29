import React, { useState } from 'react'
import './ServicesNavbar2.css'

function ServicesNavbar2() {
  const [navBarActive,setNavBarActive] = useState(false)
  const handleClick = (e: any) => {
    // e.prevent.value();
    // setNavBarActive(true)
  }
  return (
    <div className='navbar2'>
   <ul>
  <li className={navBarActive?'tabSelected':''} onClick={handleClick}>Editing & Language Services</li>
  <li className={navBarActive?'tabSelected':''} onClick={handleClick}>Publication Support</li>
  <li className={navBarActive?'tabSelected':''} onClick={handleClick}>Scientific / Academic Writing</li>
  <li className={navBarActive?'tabSelected':''} onClick={handleClick}>Research & Statistical Analysis</li>
  <li className={navBarActive?'tabSelected':''} onClick={handleClick}>Thesis & Dissertation Services</li>
  <li className={navBarActive?'tabSelected':''} onClick={handleClick}>High Impact Research Support</li>
</ul>
    </div>
  )
}

export default ServicesNavbar2
