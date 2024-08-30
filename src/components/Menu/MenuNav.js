import React from 'react'
import './MenuNav.css'
export default function MenuNav({size,setShow}) {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop"onClick={()=>setShow(true)}>
                Food Town Menu
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
</span>
<span>{size}</span>
            </div>
        </div>
    </nav>
  )
}
