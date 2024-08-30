import React, { useState } from 'react'
import './Login.css'
export default function Login() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[error,setError]=useState('');
  const[success,setSuccess]=useState('');

  const validate=(event)=>{
   event.preventDefault();
 
  if(name=='' ||email=='')
  {
    setError('fill all the information');
    return;
  }
    setError('');
    console.log('Form submitted:', { name, email });
}

  return (
    <div className='login'>
<form action="https://api.web3forms.com/submit" method="POST" onSubmit={validate}>
<input type="hidden" name="access_key" value="3e8e57f1-45ac-4340-b962-1f7c0e15bf8e"/>
<div className="logheadline">
  |Login
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<label for="inputPassword5" class="form-label">password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
</div>
{error && <p style={{ color: 'red' }}>{error}</p>} 
<button type="submit" className="formButton">Submit</button>

</form>
</div>
  )
}
