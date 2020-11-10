import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from "react-router-dom";


export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="account">
      {(popupState) => (
        <React.Fragment>
          <IconButton variant="contained" color="primary" {...bindTrigger(popupState)}>
            <AccountCircleIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            Account
            <MenuItem onClick={popupState.close}>
              <Link to="/login">
              Login
              </Link>
              </MenuItem>
            <MenuItem onClick={popupState.close}>Sign Up</MenuItem>
            <MenuItem onClick={popupState.close}>Register as Vendor</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
