import { Link } from '@mui/material'
import React from 'react'
import '../../css/Login/WorkspaceSignIn.css';

function WorkspaceSignIn() {
  return (
    <>
      <div className="workspace__header">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
      </div>
      <div className="workspace__body">
        <div className="workspace__container">
          <h1>Sign in to your workspace</h1>
          <p className="workspace__url">Enter your workspace's Slack URL</p>
          <input type="text" placeholder="your-workspace.slack.com" className="workspace__input"  onChange={"handleEnteredEmail"}></input>
          <button onClick={"loginToWorkspace"} className="workspace__button">
            <p>Continue</p>
          </button>
          <p className='workspace__paragraph'>Don't know your workspace URL? <Link to="" className="workspace__link">Find your workspaces</Link> </p>
          <p className='workspace__paragraph'>Looking to create a workspace instead? <Link to="" className='workspace__link'>Create a new workspace</Link></p>
        </div>
      </div>
    </>
  )
}

export default WorkspaceSignIn
