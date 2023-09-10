import React from 'react'
import '../css/Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MapsUgcSharpIcon from '@mui/icons-material/MapsUgcSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <div className="sidebar__text">
            <button>
              <span class="button__text">FullStack Developers Workspace</span>
              <span><ArrowDropDownIcon/></span>
            </button>
              <span><MapsUgcSharpIcon className="sidebar__headericon"/></span>
          </div>
          <div className="sidebar__onlinestatus">
            <FiberManualRecordIcon style={{color: 'green'}}/>
            <span>Sai Mounika Peri</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
