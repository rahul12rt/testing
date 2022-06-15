import React from "react";
import'./Navbar.css';
import{Link} from 'react-router-dom'
import { Navigate } from "react-router-dom";

function Navbar(){
    
    const onSubmitt = () => {
        localStorage.removeItem('Token');
        Navigate('/SignIn');
    }
    return(
        
        <div className='Navbar-wrapper'>
        <div className='Navbar'>
        <h1  className="logo">.INFI.</h1>
        </div>
        <div className='search-button'>
            <Link to='/Search'><p className='Navbar-search'>SEARCH</p></Link>
        </div> 
        <form className='sign-out' onSubmit={onSubmitt}>
            <button type="submit" className='Navbar-signout'>SIGN OUT</button>
        </form>
    </div>
        
    )
}
export default Navbar;