import React from 'react';
import { Navigate } from 'react-router-dom';


const TOKEN_KEY = 'userToken';
const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
        return false
}

const Private = ({component:Component , ...rest}) => {
    if(isLogin()){
        return <Component {...rest} />;
    }
    
    return <Navigate to='/SignIn' />;
}
export default Private