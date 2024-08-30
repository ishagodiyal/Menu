import React from 'react'
import './Home.css'

function Home() {
  const handleLoginButton=()=>{
    const loginLink=document.getElementById('loginLink');
    if(loginLink){
      loginLink.click();
    }
  };
  return (
    <div className="homepage">

      <div className="home_tittle">
        Experience Real Taste of Food<br/>
        <button type="button" className='btn1' onClick={handleLoginButton}>Login/SignUp</button>
      </div>
      

    </div>
  )
}
export default Home


