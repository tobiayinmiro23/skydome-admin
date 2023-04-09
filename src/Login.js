import React,{useState} from 'react'
import './Login.css'
function Login({page}) {
  const[password,setpassword]=useState('')
  const[email,setemai]=useState('')
  const[errormessage,seterrormessage]=useState(' ')
//  for posting user  input to the database to validate user
    const handleUserData=()=>{
      fetch('https://localhost:3000/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
          email:email,
          password:password
      })
    }).then(res=>res.json())
    .then(user=>{
      if (user.id){
          console.log('user is valid')
      }
    }).catch(err=>{
      console.log('an error occured')
      err.preventDefault()
      seterrormessage('invalid username or password')
    })

    }
  return (
    <div className='loginWrapper'>
      <main className="login">
          <h1>Admin Login</h1>
          <div className="input-content">
          <form action="" method=""> 
              <input name="email" onChange={(e)=>setemai(e.target.value)} value={email} required placeholder="Email" type="email" />
              <input name="password" required onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="password" type="password" />
              <p className="error">{errormessage}</p>
              <button className="button" onClick={page('home')}>log in</button> 
          </form>
          </div>
      </main>
    </div>
  )
}

export default Login