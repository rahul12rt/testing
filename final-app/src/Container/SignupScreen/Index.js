import React from 'react'
import{Link} from 'react-router-dom'

function Signup() {
  return (
    <>
    <div className="signin-wrapper">
        <div className="signin" />
        <div className="signin-wrappers">
           <h1 className="signin-title"><span className="Alien">Alien</span> account</h1> 
           <p className="signin-content">Join the world's largest community</p>   
           
           <form className="signin_form">
            <input type="text" placeholder="Name" className="input_value"/>    
            <input type="number" placeholder="Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="input_value"/> 
            <input type="email" placeholder="Email ID" className="input_value"/>    
            <input type="password" placeholder="Password" className="input_value"/>  
            <input type="password" placeholder="Confirm Password" className="input_value"/> 
            <input type="number" placeholder="OTP" className="input_value"/>   
            <button type="submit" className="signin_button">Sign up</button>
            <h6 className="signin-contents">Already a user ? <Link to='/SignIn'><span className="Sign_up">SIGN IN</span></Link></h6>
           </form>
           </div>
           
       </div>
    
    </>
  )
}

export default Signup