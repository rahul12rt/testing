import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate()
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [userError, setUserError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleUser = (e) => {
    setUser(e.target.value)
  }
  const handleEmail = (e) => {
    
    setEmail(e.target.value)
  }

  
  const handleApi = (e) =>{
    e.preventDefault()
  console.log("enter")
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (user === ''){
    setUserError('user required')
    console.log('user')
    return
  }
  else if (email === ''){
    setEmailError('email required')
    return
  }
  else if (!regex.test(email)) {
    setEmailError('email Not valid ')
    return
  }
  else
  {
        console.log({user,email})
        axios.get('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=8612aaeb857886e801ddfca868da9cf3',{
        user:user ,
        email:email
        })
    
        .then(result => {
          console.log(result.data.guest_session_id)
          localStorage.setItem('Token', result.data.guest_session_id )
          navigate('/Home')
        })
        .catch(error => {
          console.log(error)
        })
  
      }
      {
        setUserError('user Required')
      }
    
  }

  return (
    <>
    <form onSubmit={handleApi}>
    <input value={user} onChange={handleUser}  />
    {userError&&<div className='error'>{userError}</div>}
    <input  value={email} onChange={handleEmail} />
    {emailError&&<div>{emailError}</div>}
    <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default SignUp