import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './styles'
import { useNavigate } from 'react-router';
import GroupsApiWrapper from 'utils/apiWrappers/groupsApiWrapper';

interface IGroupData {
	cardId?: number;
}

const options = [
  { label: 'Edit', action: () => {} },
  { label: 'Assign Seats', action: () => {} },
  { label: 'Delete', action: () => {} },
]

const FloatingMenu = (props: IGroupData) => {
  const navigate = useNavigate();

  const { menuContainer, menuButton } = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.target);
  };

  const handleClose = (option: string) => {
    switch(option){
      case 'Edit': { navigate(`/groups/edit/${props.cardId}`); break;}
      case 'Delete': { 
        GroupsApiWrapper.deleteGroup(props.cardId); 
        navigate('/groups');
        break;}
    }
    setAnchorEl(null);
    console.log('close clicked');
  };

  return(
    <div className={menuContainer}>
    <IconButton
        className={menuButton}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option.label} selected={option.label === 'Pyxis'} onClick={() => handleClose(option.label)} id={`lmsGroup${option.label}GroupAction`}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
  </div>
  )
}

export default FloatingMenu
