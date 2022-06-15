import React from 'react';
import { Navigate } from 'react-router-dom';

const TOKEN_KEY = 'userToken';
const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
        return false
}

const Public = ({component:Component , ...rest}) => {
    if(isLogin()){
        return <Navigate to='/Home'/>;
    }
    return <Component {...rest}/>;
}

export default Public