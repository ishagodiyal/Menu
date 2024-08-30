import React from 'react'
import './Products.css'
import list from './data.json'
import Chicken from './chicken.jpg'
import noodles from './noodles.jpg'
import burger from './bg.jpg'
import pasta from './pasta.jpg'
import choco from'./chocolate.jpg'
import fries from './fries.jpg'
import desi from './desi.jpg'
import meal from './meal.jpg'
import egg from './egg.jpg'
import momo from './momo.jpg'
import dalchawal from './dalchawal.jpg'
import saladd from './saladd.jpg'

export default function Products({handleClick}) {
    const imageMap = {
        1: choco,
        2:noodles,
        3:fries,
        4:pasta,
        5:desi,
        6:burger,
        7:Chicken,
        8:meal,
        9:egg,
        10:dalchawal,
        11:saladd,
        12:momo
      };
  return (
    <div className="product_item">
        {list.map((item)=>(
       <div key={item.id} className="product" >
        <img src={imageMap[item.id]} alt="image" className="product_image"></img>
        <div className="price">{item.price}</div>
        <div className="data_name">
   {item.name}
   </div>
   <button type="button" class="btn btn-warning" onClick={() => handleClick(item)}>ADD TO CART</button>
   
  </div>
))}
</div>
  );
}
    


