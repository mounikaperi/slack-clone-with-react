import React from 'react'
import '../css/ChatInput.css'
import Box from '@mui/joy/Box';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useStateValue } from '../StateProvider';
import { getChatInputFooterOptions, getChatInputHeaderOptions } from '../commonUtils/utils';

function ChatInput({ channelName, channelId }) {
  const [text, setText] = React.useState('');
  const [{ user }] = useStateValue();
  const chatHeaderOptions = getChatInputHeaderOptions();
  const chatFooterOptions = getChatInputFooterOptions();
  const sendMessage = (e) => {
    e.preventDefault();
  }
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  return (
    <Textarea placeholder={`Message ${channelName || user?.displayName}`} value={text}
      onChange={(event) => setText(event.target.value)} minRows={2} maxRows={4}
      className="chatInput__textarea"
      startDecorator={
        <Box className="chatInput__textarea_header" sx={{ display: 'flex', gap: 0.5 }}>
          {
            chatHeaderOptions?.map((currentChatHeaderOption) => {
              const { title, keys=[], Icon } = currentChatHeaderOption || {};
              return <HtmlTooltip
              title={
                <div className="toolTip">
                  <p>{title}</p>
                  <div className = "toolTip__shortcut">
                    {
                      keys?.map((currentKey) => <button>{currentKey}</button>)
                    }
                  </div>
                </div>
              } placement="top">
              <button><Icon /></button>
            </HtmlTooltip>
            })
          }
        </Box>
      }
      endDecorator={
        <div className="chatInput__textarea_footer">
          <Box className="chatInput__textarea_header" sx={{ display: 'flex', gap: 0.5 }}>
          {
            chatFooterOptions?.map((currentChatFooterOption) => {
              const { title, Icon } = currentChatFooterOption || {};
              return <HtmlTooltip
              title={
                <div className="toolTip">
                  <p>{title}</p>
                </div>
              } placement="top">
              <button><Icon /></button>
            </HtmlTooltip>
            })
          }
          </Box>
          <Typography className="chatInput__textarea_send" level="body-xs" sx={{ ml: 'auto' }}>
            <SendIcon onClick={sendMessage} />
            <KeyboardArrowDownIcon />
          </Typography>
        </div>
      }
      sx={{ minWidth: 300 }}
    />
  );
}

export default ChatInput
