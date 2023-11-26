import React from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
import '../css/Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
  const [dispatch] = useStateValue();
  
  const loginToWorkspace = () => {
    console.log(dispatch);
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    })
    .catch((error) => alert(error.message))
  }
  return (
    <>
    <div className="login__header">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
        <div id="createAccount">
          <p>New to Slack?</p><br/>
          <a href="#">Create an account</a>
        </div>
      </div>
    <div className="login__body">
      <div className="login__container">
        <h1>Sign in to Slack</h1>
        <h2>We suggest using the email address you use at work</h2>
        <button onClick={loginToWorkspace} className="login__button">
          <GoogleIcon className="google__icon"/>
          <p>Sign In With Google</p>
        </button>
        <div className="horizontal__rule">
          <hr />
          <div className="divider__or">OR</div>
          <hr />
        </div>
        <input type="text" placeholder="name@work-email.com" class="input__text"></input>
        <button className="login__button" id="signInWithEmail"><p>Sign In With Email</p></button>
        <div id="signInWithMagicalCode">
          <span>We’ll email you a magic code for a password-free sign in. Or you can <a href="#">sign in manually instead.</a></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
