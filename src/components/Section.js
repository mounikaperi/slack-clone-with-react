import * as React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import '../css/Section.css'

export default function Section(props) {
  const { ExpandMoreIcon } = props || {};
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div> 
          <ExpandMoreIcon className="expandMore__icon" onClick={handleClick} />
          {open
            ? (<Paper sx={{ width: 300, maxWidth: '100%', position: 'absolute', left: 200 }}>
              <MenuList style={{ width: '285px' }}>
                <MenuItem>
                  <ListItemText>Create</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    <NavigateNextIcon/>
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemText>Manage</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    <NavigateNextIcon />
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemText>Show and Sort</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    <NavigateNextIcon />
                  </Typography>
                </MenuItem>
              </MenuList>
            </Paper>)
            : null}
        </div>
      </ClickAwayListener>
    </>
  );
}
