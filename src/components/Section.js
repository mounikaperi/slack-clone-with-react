import * as React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Section(props) {
  const { showMenu } = props || {};
  return (
    showMenu && <Paper sx={{ width:300, maxWidth: '100%' }}>
      <MenuList style={{width: '285px'}}>
        <MenuItem>
          <ListItemText>Create</ListItemText>
          <Typography variant="body2" color="text.secondary">
            <NavigateNextIcon />
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
    </Paper>
  );
}
