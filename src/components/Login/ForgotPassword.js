import React from 'react'

function ForgotPassword() {
  return (
    <div className="container">
      <h1>Password Reset</h1>
      <p>To reset your password, enter the email address you use to sign in to {"workspaceName"}</p>
      <input type="text" placeholder='you@example.com'></input>
      <button onClick={"loginToWorkspace"} className="workspace__button">
        <p>Get Reset Link</p>
      </button>
    </div>
  )
}

export default ForgotPassword
