import { CHAT_INPUT_ACTIONS } from "../commonUtils/constants";
import '../css/ChatInput.css'

export const handleClickEventForCorrespondingTitle = (title) => {
  switch (title) {
    case CHAT_INPUT_ACTIONS['CHANGE_TEXT_TO_BOLD']:
        const ChatInputElement = document.getElementsByClassName('chatInput__textarea');
        console.log(ChatInputElement);
        // ChatInputElement.classList.toggle('chatInput__bold');
      break;
    case CHAT_INPUT_ACTIONS["CHANGE_TEXT_TO_ITALIC"]:

      break;
    default:
      break;
  }
}
export const sendMessage = (e) => {
  e.preventDefault();
}