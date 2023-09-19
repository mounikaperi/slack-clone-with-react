import React from 'react'
import '../css/Message.css'

function Message(props) {
  const {message, user, userImage, timestamp} = props || {};
  console.log(`message=${message} timestamp=${timestamp} user=${user} userImage=${userImage}`);
  return (
    <div className="message">
      <img src={userImage} alt=""/>
      <div className="message__info">
        <h4>{user}</h4>
        <h3>{"timestamp"}</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
