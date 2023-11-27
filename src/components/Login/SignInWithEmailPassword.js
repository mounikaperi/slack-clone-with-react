import React from 'react'
import { Link } from 'react-router-dom';

function SignInWithEmailPassword() {
  return (
    <div>
      <h1>Sign in to {"WorkspaceName"}</h1>
      <p>Enter your email address and password</p>
      <input type="text" placeholder='you@example.com'></input>
      <input type="password" placeholder='password'></input>
      <button onClick={"loginToWorkspace"} className="workspace__button">
        <p>Sign In</p>
      </button>
      <Link to="/forgot-password">I forgot my password</Link>
    </div>
  )
}

export default SignInWithEmailPassword
