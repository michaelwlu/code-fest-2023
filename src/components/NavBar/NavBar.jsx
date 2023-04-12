import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import avatar from '../../Assets/logo.png';

const NavBar = () => {
  const handleLogout = () => {
    console.log('test');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar
          alt="Profile picture"
          src={avatar}
          style={{
            marginRight: '10px',
            borderRadius: '50%',
            width: 50,
            height: 50,
          }}
        />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
