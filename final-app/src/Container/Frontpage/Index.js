import React from "react";
import './FrontPage.css'
import {Link} from 'react-router-dom';

function FrontPage (){
    

    return(
        <>
      
        <div className="Wrapper">
        
        <div>
            
        </div>
        {/*Navbar*/}
        <div className="Navbar">
        <div>
            <h1  className="Logo">.INFI.</h1>
        </div>
        </div>
        {/*Hero-Section*/}
    <div className="Hero_flexs">
        <>
    <div className="Hero_container">
    <span className="Hero-content">Watch anywhere. Cancel anytime</span><span className="online">.</span>
        <h1>Welcome to INFI.</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </p>
        <div className="buttons">
            <Link to="/Home"><button className="Hero_button">WATCH FREE FOR 30 DAYS</button></Link>
            <Link to="/SignIn"><button className="Hero_button">SIGN IN</button></Link>
        </div>

    </div>
    </>
        
    </div>
   
                
           
            
            
        </div>

        </>
    )
}
export default FrontPage