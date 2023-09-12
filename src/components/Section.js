import React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { styled } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { grey } from '../commonUtils/constants';

function Section(props) {
  const { showDropdown } = props || {};
  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    padding: 6px;
    margin: 12px 0;
    position: absolute;
    min-width: 200px;
    max-width: 100%;
    max-height: calc(100vh  - 62px);
    border-radius: 12px;
    width: 300px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    z-index: 1012;
    `,
  );
  return (
    <>
      <Dropdown defaultOpen={!showDropdown} open={showDropdown} className="dropDown">
        <Menu slots={{ listbox: StyledListbox }}>
          <div className="styledMenuItem">
            <span className="menuItem__name">Create</span>
            <NavigateNextIcon style={{marginLeft: '220px'}}/>
          </div>
          <div className="styledMenuItem">
            <span className="menuItem__name">Manage</span>
            <NavigateNextIcon style={{marginLeft: '210px'}}/>
          </div>
          <div className="styledMenuItem">
            <span className="menuItem__name">Show and sort</span>
            <NavigateNextIcon style={{marginLeft: '170px'}}/>
          </div>
        </Menu>
      </Dropdown>
    </>
  )
}

export default Section
