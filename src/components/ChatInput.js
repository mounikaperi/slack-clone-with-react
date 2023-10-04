import React, { useState } from 'react'
import '../css/ChatInput.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/joy/Typography';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useStateValue } from '../StateProvider';
import { getChatInputFooterOptions, getChatInputHeaderOptions } from '../commonUtils/utils';
import { CHAT_INPUT_ACTIONS } from '../commonUtils/constants';

function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();
  const [inputValue, setInputValue] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [bold, setBold] = useState(false);

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

  const handleInputChange = (event) => {
    console.log('Entered handleInputChange')
    setInputValue(event.target.value);
  };

  const handleTextSelection = () => {
    console.log('Entered handleTextSelection')
    const input = document.getElementById('textInput');
    const selectedStart = input.selectionStart;
    const selectedEnd = input.selectionEnd;

    // Check if there's a selection (start and end positions are different)
    if (selectedStart !== selectedEnd) {
      const selected = inputValue.substring(selectedStart, selectedEnd);
      setSelectedText(selected);
    }
  }

  const handleBoldToggle = () => {
    console.log('Entered handleBoldToggle')
    setBold(!bold);
    const input = document.getElementById('textInput');
    const selectedStart = input.selectionStart;
    const selectedEnd = input.selectionEnd;
    const startText = inputValue.substring(0, selectedStart);
    const endText = inputValue.substring(selectedEnd);
    const selected = bold ? `<b>${selectedText}</b>` : selectedText;
    setInputValue(`${startText}${selected}${endText}`);
  }

  const handleButtonClick = (action) => {
    switch (action) {
      case CHAT_INPUT_ACTIONS.TOGGLE_TEXT_BOLD:
        console.log('Entered handleButtonClick')
        handleBoldToggle();
        break;
      case CHAT_INPUT_ACTIONS.TOGGLE_TEXT_ITALIC:
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
                <button className="chatInput__button" key={title} onClick={() => handleButtonClick(title)}><Icon /></button>
              </HtmlTooltip>
            })
          }
        </div>
        <div
            id="textInput"
            contentEditable="true"
            className="chatInput__text"
            placeholder={`Message ${channelName || user}`}
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleTextSelection}
            dangerouslySetInnerHTML={{ __html: inputValue }}
          >
        </div>
        <div className="chatInput__footer">
          {
            chatFooterOptions?.map((currentChatFooterOption) => {
              const { title, Icon } = currentChatFooterOption || {};
              return <HtmlTooltip key={title}
                title={
                  <div className="toolTip">
                    <p id="toolTipFooter">{title}</p>
                  </div>
                } placement="top">
                <button className="chatInput__button"><Icon key={title} /></button>
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
