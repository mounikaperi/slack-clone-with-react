import React, { useState } from 'react'
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
import { CHAT_INPUT_ACTIONS, TOGGLE_TEXT_BOLD, TOGGLE_TEXT_ITALIC } from '../commonUtils/constants';

function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();

  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const chatHeaderOptions = getChatInputHeaderOptions();
  const chatFooterOptions = getChatInputFooterOptions();

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

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const textStyle = {
    fontWeight: TOGGLE_TEXT_BOLD[isBold],
    fontStyle: TOGGLE_TEXT_ITALIC[isItalic]
  };

  const handleButtonClick = (action) => {
    switch (action) {
      case CHAT_INPUT_ACTIONS.TOGGLE_TEXT_BOLD:
        setIsBold(!isBold);
        break;
      case CHAT_INPUT_ACTIONS.TOGGLE_TEXT_ITALIC:
        setIsItalic(!isItalic);
        break;
      case CHAT_INPUT_ACTIONS.TOGGLE_TEXT_STRIKETHROUGH:
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="container">
        <div className="chatInput__header">
          {
            chatHeaderOptions?.map((currentChatHeaderOption) => {
              const { title, keys = [], Icon } = currentChatHeaderOption || {};
              return <HtmlTooltip key={title}
                title={
                  <div className="toolTip">
                    <p>{title}</p>
                    <div className="toolTip__shortcut">
                      {
                        keys?.map((currentKey) => <button key={currentKey}>{currentKey}</button>)
                      }
                    </div>
                  </div>
                } placement="top">
                <button key={title} onClick={() => handleButtonClick(title)}><Icon /></button>
              </HtmlTooltip>
            })
          }
        </div>
        <input type="text" className="chatInput__text" placeholder={`Message ${channelName || user}`}/>
        <div className="chatInput__footer">
          {
            chatFooterOptions?.map((currentChatFooterOption) => {
              const { title, Icon } = currentChatFooterOption || {};
              return <HtmlTooltip key={title}
                title={
                  <div className="toolTip">
                    <p>{title}</p>
                  </div>
                } placement="top">
                <button><Icon key={title} /></button>
              </HtmlTooltip>
            })
          }
          <Typography className="chatInput__textarea_send" level="body-xs" sx={{ ml: 'auto' }}>
            <SendIcon />
            <KeyboardArrowDownIcon />
          </Typography>
        </div>
      </div>
    </>
  );
}

export default ChatInput
