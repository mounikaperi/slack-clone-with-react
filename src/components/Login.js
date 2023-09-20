import React from 'react';
import '../css/Login.css';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
        <h1>Sign in to Fullstack Developers Workspace</h1>
        <p>fullstackdeveloper.slack.com</p>
        <button>
          <GoogleIcon className="google__icon"/>
          <p>Sign In With Google</p>
        </button>
      </div>
    </div>
  )
}

export default Login
