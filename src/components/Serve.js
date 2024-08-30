import React from 'react'
import "./Serve1.css"
import logo from "./images/servelogo.png"
import items from "./item.json"
import starter from "./images/starter.jpg";
import salad from "./images/salad.jpg";
import veg from "./images/veget.jpg";
import nonveg from "./images/nonveg.jpg";
import drink from "./images/drink.jpg";
import dessert from "./images/dessert.jpg";
import bread from "./images/breads.jpg"
import pizza from "./images/pizza.jpg";
import burger from "./images/burger.jpg"

export default function Serve() {
  const imageMap = {
    1: starter,
    2: salad,
    3: veg,
    4: nonveg,
    5: drink,
    6: dessert,
    7: pizza,
    8: burger,
    9: bread
  };



  return (
    <div style= {{backgroundColor: "rgba(231, 228, 219, 0.99)"}} className="serve">

      <div className="heading">
      <img src={logo}  className="servelogo" alt="logo"/>
       We Serve
       <img src={logo}  className="servelogo" alt="logo"/>
      </div>
    
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={imageMap[item.id]} alt={`item-${item.id}`} className="item-image" />
           <div className="item_name">
           {item.name}
           </div>
          </div>
        ))}
      </div>

    </div>
  )
}
