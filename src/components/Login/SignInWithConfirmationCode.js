import React, { useEffect } from 'react';
import '../../css/Login/SignInEmail.css';

/**
 * Create an account- once confirmation code received enter the workspace area and create 4 steps
 * SignIn - once confirmation code received login to its existing workspace
 */
function SignInWithConfirmationCode(props) {
  const { sharedData, setSharedData } = props;

  const handleEnteredConfirmationCode = (event) => {
    setSharedData((prevState) => ({
      ...prevState,
      confirmationCode: event.target.value
    }));
  };

  useEffect(() => {
    if (sharedData.confirmationCode.length === 8) {
      //call API Request to login
    }
  }, [sharedData.confirmationCode]);

  return (
    <>
      <div className="signin__header">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VNTO9A4Ya48o-0GRgCPkogHaEK&pid=Api&P=0&h=180" alt="slack" />
      </div>
      <div className="signin__body">
        <div className="signin__container">
          <h1>Check your email for a code</h1>
          <p className="character">We've sent a 8-character code to ${sharedData.email}. The code expires shortly, so please enter it soon.</p>
          <input type="text" placeholder="Enter Confirmation code sent to your email" className="signin__input" value={sharedData.confirmationCode} maxLength={8} onChange={handleEnteredConfirmationCode}></input>
          <div className="email__options">
            <a href="https://mail.google.com/mail/u/0/#inbox" className='email'>
              <img className='email__image' src="https://a.slack-edge.com/bv1-10/get-started-icon-gmail-b3b3a57.png" alt="email" />
              <span>Open Gmail</span>
            </a>
            <a href="https://outlook.live.com/mail/0/inbox" className='email'>
            <img className='email__image' src="https://a.slack-edge.com/bv1-10/get-started-icon-outlook-55f9ac5.png" alt="email" />
              <span>Open Outlook</span>
            </a>
          </div>
          <p className="spam">Can't find your code? Check your spam folder!</p>
        </div>
      </div>
    </>
  )
}

export default SignInWithConfirmationCode
