import React, { useEffect, useState } from 'react'
import '../css/Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MapsUgcSharpIcon from '@mui/icons-material/MapsUgcSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SidebarOption from './SidebarOption';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import { getSidebarFixedOptions } from '../commonUtils/utils';

function Sidebar() {
  const sidebarOptions = getSidebarFixedOptions();
  const [channels, setChannels] = useState([])
  const [{ user }] = useStateValue();
  useEffect(() => {
    // Run this code when the sidebar component loads
    db.collection('channels').onSnapshot((currentChannel) => (
      setChannels(
        currentChannel.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    ))
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <div className="sidebar__text">
            <button>
              <span className="button__text">FullStack Developers Workspace</span>
              <span><ExpandMoreIcon /></span>
            </button>
            <span><MapsUgcSharpIcon className="sidebar__headericon" /></span>
          </div>
          <div className="sidebar__onlinestatus">
            <FiberManualRecordIcon style={{ color: 'green' }} />
            <span>{user?.displayName}</span>
          </div>
        </div>
      </div>
      {
        sidebarOptions?.map(({ Icon, title }) =>
          <SidebarOption key={Icon} Icon={Icon} title={title} />
        )
      }
      <hr />
      {/* Having a SectionIcon represents its a new section and all features related to section such as Create, Manage, Show and Sort has to be shown */}
      <SidebarOption Icon={ArrowDropDownIcon} title="Channels" SectionIcon={ExpandMoreIcon}></SidebarOption>
      {channels.map((channel) => <SidebarOption title={channel.name} id={channel.id} key={channel.id} />)}
    </div>
  )
}

export default Sidebar
