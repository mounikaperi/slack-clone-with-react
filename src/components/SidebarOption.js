import React, { useState } from 'react'
import '../css/SidebarOption.css'
import Section from './Section';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function SidebarOption(props) {
  const { Icon, title, SectionIcon, id } = props || {};
  const [isVisible, setIsVisible] = useState(false);
  const history = useHistory();
  const showSectionMenu = () => {
    setIsVisible(true);
  }
  const selectChannel = () => {
    if (id) {
      history.push(`/channel/${id}`);
    } else {
      history.push('title');
    }
  }
  return (
    <div className="sidebaroption" onClick={() => selectChannel()}>
      {Icon && <Icon className="sidebaroption__icon" />}
      {Icon
        ? (<h3>{title}</h3>)
        : (<h3 className="sidebaroption__channel"><span className="sidebaroption__hash">#</span>{title}</h3>) 
      }
      {SectionIcon && <SectionIcon className="sidebarsection__icon" onClick={() => showSectionMenu()}/>}
      { isVisible ? <Section showMenu={true} /> : null}
    </div>
  )
}

export default SidebarOption