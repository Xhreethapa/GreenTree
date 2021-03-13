import React from 'react'
import Button from '@material-ui/core/Button';
import './Login.css';
import {auth, provider} from "./firebase";
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';

function Login() {
    const[state, dispatch]= useStateValue();
    const signIn =()=>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            dispatch({
            type:actionTypes.SET_USER,
            user:result.user});
        })
        .catch((error)=> alert(error.mesage));

    }
    return (
        <div className="login">
            <div className="login__logo">
               <img src="https://i.pinimg.com/originals/19/c1/3f/19c13f2f82ec4ddecd8ad45817890381.png"  />
               <div>Save Trees</div>
            </div>
            <Button onClick={signIn} type="submit">Sign in</Button>
        </div>
    )
}

export default Login
