import React from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
import '../css/Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { provider } from '../firebase';

function Login() {
  const loginToWorkspace = () => {
    firebase.auth().signInWithPopup(provider)
    .then((result) => console.log(result))
    .catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
        <h1>Sign in to Fullstack Developers Workspace</h1>
        <p>fullstackdevelopers.slack.com</p>
        <button onClick={loginToWorkspace}>
          <GoogleIcon className="google__icon"/>
          <p>Sign In With Google</p>
        </button>
      </div>
    </div>
  )
}

export default Login
