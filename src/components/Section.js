import * as React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import menuItems from '../commonUtils/utils';
import '../css/Section.css'

export default function Section(props) {
  const { ExpandMoreIcon } = props || {};
  const channelMenuItems = menuItems();
  const channelItems = channelMenuItems[0].submenu;
  const [open, setOpen] = React.useState(false);
  const [openSideList, setOpenSideList] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const shouldSideListBeRendered = () => {
    setOpenSideList(true);
  }
  const renderSideList = (channelItems) => {
    const { submenu=[] } = channelItems || {};
    return <Paper sx={{ width: 300, maxWidth: '100%', position: 'absolute', left: 300, top: -5 }}>
      <MenuList style={{ width: '285px' }}>
        {submenu.map((currentSubMenuItem) => {
          return (<MenuItem key={currentSubMenuItem.title}>
            <ListItemText>{currentSubMenuItem.title}</ListItemText>
            <Divider />
          </MenuItem>)
        })}
      </MenuList>
    </Paper>
  }
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <ExpandMoreIcon className="expandMore__icon" onClick={handleClick} />
          {open
            ? (<Paper sx={{ width: 300, maxWidth: '100%', position: 'absolute', left: 200, top: 570 }}>
              <MenuList style={{ width: '285px' }}>
                {channelItems.map((currentChannelItem) => {
                  return (<MenuItem key={currentChannelItem.title}>
                    <ListItemText>{currentChannelItem.title}</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      <NavigateNextIcon  key={currentChannelItem.title} onClick={shouldSideListBeRendered} />
                      { openSideList ? renderSideList(currentChannelItem): null}
                    </Typography>
                    <Divider />
                  </MenuItem>)
                })}
              </MenuList>
            </Paper>)
            : null}
        </div>
      </ClickAwayListener>
    </>
  );
}