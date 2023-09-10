import React from 'react'
import '../css/Header.css'
import AccessTime from '@mui/icons-material/AccessTime'
import HelpOutline from '@mui/icons-material/HelpOutline'
import Search from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune';
import BadgeAvatars from './BadgeAvatars'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <AccessTime />
      </div>
      <div className="header__search">
        <input placeholder='Search FullStack Developers Workspace' />
        <span className="header__span">
          <TuneIcon className="header__filter"/>
          <Search className="header__searchicon" />
        </span>
      </div>
      <div className="header__right">
        <HelpOutline className="header__help" sx={{ width: 25, height: 25 }} />
        <BadgeAvatars className="header__account" />
      </div>
    </div>
  )
}

export default Header
