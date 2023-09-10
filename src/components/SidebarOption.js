import React from 'react'
import '../css/SidebarOption.css'

function SidebarOption(props) {
  const { Icon, title } = props || {};
  return (
    <div className="sidebaroption">
      {Icon && <Icon className="sidebaroption__icon" />}
      {Icon 
        ? (<h3>{title}</h3>)
        : (<h3 className="sidebaroption__channel"><span className="sidebaroption__hash">#</span>{title}</h3>) 
      }
    </div>
  )
}

export default SidebarOption
