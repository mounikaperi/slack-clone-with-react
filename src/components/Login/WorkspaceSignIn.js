import React from 'react'
import { Link } from 'react-router-dom';

// TODO: after one successful login store the cookie for some days if cookie is available then enter workspace directly else route it to sign in page
// cookie is not enabled as of now
function WorkspaceSignIn() {
  return (
    <div>
      <div className="header">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
        <span>{"workspaceName"}</span>
      </div>
      <div className="container">
        <p>Sign In to {"WorkspaceName"}</p>
        <button onClick={"loginToWorkspace"} className="workspace__button">
          <p>Sign in with Okta</p>
        </button>
        <div className="horizontal__rule">
          <hr />
          <div className="divider__or">OR</div>
          <hr />
        </div>
        <button onClick={"loginToWorkspace"} className="workspace__button">
          <p>I have a guest account</p>
        </button>
        <p>Sign in with your email and password if you have a guest account</p>
        <p>Org Owners can also <Link to="/sign-in-with-email-password">sign in here.</Link></p>
      </div>
    </div>
  )
}

export default WorkspaceSignIn
