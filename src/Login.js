import React from 'react';
import { Button } from "@material-ui/core";
import './Login.css';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        auth 
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
  return (
    <div className="login">
        <div className='login__container'>
            <img 
              src="https://seeklogo.com/images/W/whatsapp-logo-33F6A82887-seeklogo.com.png"
              alt=""
            />
            <div className='login__text'>
               <h1>Sign in to WhatsApp</h1>
            </div>

            <Button onClick={signIn}>
               Sign In With Google
            </Button>
            <p>WhatsApp Clone by Kelvin Muindi</p>

        </div>
      
    </div>
  );
}

export default Login;
