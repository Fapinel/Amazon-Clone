import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
      e.preventDefault();

      // some fancy firebase login ....
      auth
          .signInWithEmailAndPassword(email, password)
          .then(auth => {
            history.push('/')
          })
          .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // it successfully created a new user with email and password
          //console.log(auth);
          if (auth) {
            history.push('/')
        }
        })

        .catch(error => alert(error.message))
        
        
    // do some fancy firebase register ...
  }
  



  return (
    <div className='login'>
        <Link to = '/'>
      <img
        className="login_logo"
        src="https://www.registrarcorp.com/wp-content/uploads/2021/02/Amazon-logo.png"
      />
      </Link>

    <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange=
          {e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange=
          {e => setPassword(e.target.value)} />

        </form>

        <button type='submit' onClick={signIn}
         className='login_signInButton'>Sing In
        </button>

        <p>
          By signing-in you agree to Amazon's
          Conditions of Use & Sale. Please 
          see our Privacy Notice, our Cookies Notice
           and our Interest.Based Ads Notice. 
        </p>

        <button onClick={register}
         className='login_registerButton'>Create your amazon account</button>
    </div>

    </div>
  );
}

export default Login;
