import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './styles'

const options = [
  { label: 'Edit', action: () => {} },
  { label: 'Assign Seats', action: () => {} },
  { label: 'Delete', action: () => {} },
]

const FloatingMenu = () => {
  const { menuContainer, menuButton } = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <MenuItem key={option.label} selected={option.label === 'Pyxis'} onClick={handleClose}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
  </div>
  )
}

export default FloatingMenu
