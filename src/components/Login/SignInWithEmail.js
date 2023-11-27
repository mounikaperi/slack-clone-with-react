import React from 'react';

function SignInWithEmail(props) {
  const { sharedData, setSharedData } = props;

  const handleEnteredConfirmationCode = (event) => {
    setSharedData((prevState) => ({
      ...prevState,
      confirmationCode: event.target.value
    }));
  };
  
  return (
    <div>
      <div className="login__header">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
        <div>
          <h1>Check your email for a code</h1>
          <p>We've sent a 8-character code to ${sharedData.email}. The code expires shortly, so please enter it soon.</p>
          <input type="text" placeholder="Enter Confirmation code sent to your email" className="input__text" value={sharedData.confirmationCode} onChange={handleEnteredConfirmationCode}></input>
        </div>
        <div>
          <a href="https://mail.google.com/mail/u/0/#inbox">Open Gmail</a>
          <a href="https://outlook.live.com/mail/0/inbox">Open Outlook</a>
        </div>
        <p>Can't find your code? Check your spam folder!</p>
      </div>
    </div>
  )
}

export default SignInWithEmail
