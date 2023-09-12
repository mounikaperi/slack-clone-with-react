import React, { useEffect, useState } from 'react'
import '../css/Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MapsUgcSharpIcon from '@mui/icons-material/MapsUgcSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SidebarOption from './SidebarOption';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';
import ForumIcon from '@mui/icons-material/Forum';
import DraftsIcon from '@mui/icons-material/Drafts';
import db from '../firebase';

function Sidebar() {
  const [channels, setChannels] = useState([])
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
              <span><ExpandMoreIcon/></span>
            </button>
              <span><MapsUgcSharpIcon className="sidebar__headericon"/></span>
          </div>
          <div className="sidebar__onlinestatus">
            <FiberManualRecordIcon style={{color: 'green'}}/>
            <span>Sai Mounika Peri</span>
          </div>
        </div>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"></SidebarOption>
      <SidebarOption Icon={SortIcon} title="Unreads"></SidebarOption>
      <SidebarOption Icon={ForumIcon} title="Direct Messages"></SidebarOption>
      <SidebarOption Icon={AlternateEmailOutlinedIcon} title="Mentions & reactions"></SidebarOption>
      <SidebarOption Icon={BookmarkBorderIcon} title="Later"></SidebarOption>
      <SidebarOption Icon={ManageSearchIcon} title="All Channels"></SidebarOption>
      <SidebarOption Icon={GroupIcon} title="People & User groups"></SidebarOption>
      <SidebarOption Icon={DraftsIcon} title="Drafts & sent"></SidebarOption>
      <SidebarOption Icon={AppsIcon} title="Apps"></SidebarOption>
      <SidebarOption Icon={FileCopyIcon} title="Files"></SidebarOption>
      <SidebarOption Icon={MoreVertIcon} title="Show less"></SidebarOption>
      <hr />
      {/* Having a sideicon represents its a new section and all features related to section has to be shown */}
      <SidebarOption Icon={ArrowDropDownIcon} title="Channels" SectionIcon={ExpandMoreIcon}></SidebarOption>
      {channels.map((channel)=> <SidebarOption title={channel.name} id={channel.id} key={channel.id} />)}
    </div>
  )
}

export default Sidebar
