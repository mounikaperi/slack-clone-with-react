import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <>
      <div className="header">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
        <div className="header__right">
          <Link to="#">Product</Link>
          <Link to="#">Pricing</Link>
          <button onClick={"loginToWorkspace"} className="workspace__button">
            <p>Sign In</p>
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Password Reset</h1>
        <p>To reset your password, enter the email address you use to sign in to {"workspaceName"}</p>
        <input type="text" placeholder='you@example.com'></input>
        <button onClick={"loginToWorkspace"} className="workspace__button">
          <p>Get Reset Link</p>
        </button>
      </div>
    </>
  )
}

export default ForgotPassword
