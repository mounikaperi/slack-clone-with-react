import React from 'react'
import '../css/ChatInput.css'
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SubjectIcon from '@mui/icons-material/Subject';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeTwoToneIcon from '@mui/icons-material/DeveloperModeTwoTone';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useStateValue } from '../StateProvider';

function ChatInput({ channelName, channelId }) {
  const [text, setText] = React.useState('');
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
  }
  return (
    <Textarea placeholder={`Message ${channelName || user?.displayName}`} value={text} 
      onChange={(event) => setText(event.target.value)} minRows={2} maxRows={4} 
      className="chatInput__textarea"
      startDecorator={
        <Box className = "chatInput__textarea_header" sx={{ display: 'flex', gap: 0.5 }}>
          <button><FormatBoldIcon /></button>
          <button><FormatItalicRoundedIcon /></button>
          <button><StrikethroughSRoundedIcon /></button>
          <button><LinkIcon /></button>
          <button><FormatListNumberedIcon /></button>
          <button><FormatListBulletedIcon /></button>
          <button><SubjectIcon /></button>
          <button><CodeIcon /></button>
          <button><DeveloperModeTwoToneIcon /></button>
        </Box>
      }
      endDecorator={
        <div className="chatInput__textarea_footer">
          <Box className = "chatInput__textarea_header" sx={{ display: 'flex', gap: 0.5 }}>
            <button><AddCircleIcon /></button>
            <button><FormatColorTextIcon /></button>
            <button><SentimentSatisfiedAltIcon /></button>
            <button><AlternateEmailIcon /></button>
            <button><VideocamIcon /></button>
            <button><KeyboardVoiceIcon /></button>
          </Box>
          <Typography className="chatInput__textarea_send" level="body-xs" sx={{ ml: 'auto' }}>
            <SendIcon onClick={sendMessage}/>
            <KeyboardArrowDownIcon />
          </Typography>
        </div>
      }
      sx={{ minWidth: 300 }}
    />
  );
}

export default ChatInput
