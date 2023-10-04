import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../css/Chat.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
  const { channelId } = useParams();
  const [channelDetails, setChannelDetails] = useState("channel");
  const [channelMessages, setChannelMessages] = useState([]);
  const handleScroll = () => {
    const chatMessageSection = document.querySelector('.chat__messages');
    if (window.scrollY > 0) {
      chatMessageSection.classList.add('scrolled');
    } else {
      chatMessageSection.classList.remove('scrolled');
    }
  }
  useEffect(() => {
    if (channelId) {
      db.collection('channels').doc(channelId).onSnapshot((snapshot) => {
        setChannelDetails(snapshot.data())
      })
      db.collection('channels').doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          setChannelMessages(snapshot.docs.map(doc => doc.data()))
        })
    }
  }, [channelId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <h4 className="chat__headerLeft">
          <strong> # {channelDetails?.name} </strong>
          <ExpandMoreIcon className="chat__expandMoreIcon" />
        </h4>
        <div className="chat__headerRight">
          <button className="chat__viewAllMembers">
            <PermIdentityOutlinedIcon />
            <span>64</span>
          </button>
        </div>
      </div>
      <div className="chat__messages" onScroll={handleScroll}>
        {
          channelMessages?.map(({ message, user, userImage, timestamp }) =>
            <Message key={timestamp} message={message} timestamp={timestamp} user={user} userImage={userImage} />
          )
        }
      </div>
      <ChatInput channelName={channelDetails?.name} channelId={channelDetails?.id} />
    </div>
  )
}

export default Chat
