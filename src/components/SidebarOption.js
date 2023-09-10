import React, { useState } from 'react'
import '../css/SidebarOption.css'
import Section from './Section';

function SidebarOption(props) {
  const { Icon, title, SectionIcon } = props || {};
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="sidebaroption">
      {Icon && <Icon className="sidebaroption__icon" />}
      {Icon 
        ? (<h3>{title}</h3>)
        : (<h3 className="sidebaroption__channel"><span className="sidebaroption__hash">#</span>{title}</h3>) 
      }
      {SectionIcon && <SectionIcon className="sidebarsection__icon" onClick={() => setIsVisible(true)}/>}
      { isVisible ? <Section /> : null }
    </div>
  )
}

export default SidebarOption
