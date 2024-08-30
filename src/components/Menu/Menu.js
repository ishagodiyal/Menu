import React ,{useState}from 'react'
import MenuNav from './MenuNav'
import Cart from './Cart';
import Products from './Products';


export default function Menu() {
  const [show,setShow]=useState(true);
  const [cart, setCart] = useState([]);

  const handleClick=(item)=>{
    let isPresent=false;
    cart.forEach((product)=>{
      if(item.id===product.id)
        isPresent=true;
    });
    if(isPresent)
      return;
    setCart([...cart,item]);
   
  }

  return (
    <div>
      <MenuNav size={cart.length} setShow={setShow}/>
      {
        show ?(  <Products handleClick={handleClick}/>):( <Cart cart={cart} setCart={setCart}/>
      )}
    
 
    </div>
  )
}
