import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ApexGearIcon from "assets/icons/gear.svg";
import ApexGearBoldIcon from "assets/icons/gear-bold.svg";
import { Link } from "react-router-dom";

const GearComponent: React.FC = () => {
  const options = [
    { key: "seat", label: "My seat", link: "" },
    { key: "groups", label: "All groups", link: "/groups" },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentGearIcon = anchorEl === null ? ApexGearIcon : ApexGearBoldIcon;

  return (
    <>
      <Button
        id="lmsHeaderButtonGear"
        className="gearButton"
        aria-controls="gear-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={currentGearIcon} className="gearButton" alt="gear" />
      </Button>
      
      <Menu
        id="gear-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {options.map((option) => (
          <MenuItem key={option.key} onClick={handleClose} id={`lmsHeaderButton${option.key}Gear`}>
            <Link to={option.link} className="menuLink">
              {option.label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default GearComponent;
