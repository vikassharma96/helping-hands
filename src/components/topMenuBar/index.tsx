import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu, MenuItem } from '@mui/material';
import {
  StyledMenuButton,
  LoginButton,
  SignUpButton,
} from './styledComponent';
import './styles.css';
import logo from '../../assets/logo.png';

const useCoreStyles = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const TopMenuBar: React.FC = (props: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu">
      <ThemeProvider theme={useCoreStyles}>
        <img className="logo" src={logo} alt="logo" />
        <div>
          <StyledMenuButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Home
          </StyledMenuButton>
          <StyledMenuButton>About</StyledMenuButton>
          <StyledMenuButton>Blogs</StyledMenuButton>
          <StyledMenuButton>Events</StyledMenuButton>
          <StyledMenuButton>Donations</StyledMenuButton>
          <LoginButton variant="outlined">Log In</LoginButton>
          <SignUpButton variant="contained">
            Create your Account
          </SignUpButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Dummy</MenuItem>
            <MenuItem onClick={handleClose}>Dummy</MenuItem>
            <MenuItem onClick={handleClose}>Dummy</MenuItem>
          </Menu>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default TopMenuBar;
