import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

function createWorkspace() {
  return (
    <>
      <div className="login__header">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
      </div>
      <div className="login__body">
        <div className="login__container">
          <h1>First, enter your email</h1>
          <h2>We suggest using the email address you use at work</h2>
          <input type="text" placeholder="name@work-email.com" className="input__text" value={"sharedData.email"} onChange={"handleEnteredEmail"}></input>
          <button className="login__button" id="signInWithEmail" onClick={"handleSignInWithEmail"}>
            <p>Continue</p>
          </button>
          <div className="horizontal__rule">
            <hr />
            <div className="divider__or">OR</div>
            <hr />
          </div>
          <button onClick={"loginToWorkspace"} className="login__button">
            <GoogleIcon className="google__icon" />
            <p>Continue With Google</p>
          </button>
          <div id="signInWithMagicalCode">
            <p>Already using slack?</p>
            <Link to="/">Sign In to an existing workspace</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default createWorkspace
