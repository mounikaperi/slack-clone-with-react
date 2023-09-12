import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import '../css/Chat.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

function Chat() {
  const { channelId } = useParams();
  console.log(channelId);
  return (
    <div className="chat">
      <div className="chat__header">
        <h4 className="chat__headerLeft">
          <strong> # triage-help-center</strong>
          <ExpandMoreIcon className="chat__expandMoreIcon" />
        </h4>
        <div className="chat__headerRight">
          <button className="chat__viewAllMembers">
            <PermIdentityOutlinedIcon />
            <span>64</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
