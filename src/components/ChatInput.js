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
import { extractStringBetweenTags } from '../helpers/ChatInputHelper';

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
    setInputValue(event.target.value);
  };

  const handleTextSelection = () => {
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
    /**
     * The issue with selectedStart and selectedEnd being undefined is likely because you are using 
     * contentEditable on a <span> element. The selectionStart and selectionEnd properties are not available 
     * for contentEditable elements directly. To achieve text selection and manipulation in a contentEditable
     * element, you'll need to implement a more complex approach using the Selection API.
     */
    setBold(!bold);
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    const startOffset = range.startOffset;
    const endOffset = range.endOffset;
    if (startOffset !== endOffset) { // Check if there's a selection
      const startNode = range.startContainer;
      const selectedNode = startNode.parentNode; // Toggle bold for the selected text
      const textToInsert = bold ? extractStringBetweenTags(`<b>${selectedText}</b>`, 'b')[0] : `<b>${selectedText}</b>`;
      const textBeforeSelection = selectedNode.textContent.substring(0, startOffset);
      const textAfterSelection = selectedNode.textContent.substring(endOffset);
      selectedNode.innerHTML = `${textBeforeSelection}${textToInsert}${textAfterSelection}`;
      setInputValue(selectedNode.innerHTML);
    }
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
