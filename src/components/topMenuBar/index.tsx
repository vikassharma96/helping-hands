import React from 'react';
import { Button } from '@mui/material';
import { StyledMenuButton } from './styledComponent';
import './styles.css';

const TopMenuBar: React.FC = (props: any) => {
  return (
    <div className="menu">
      <div>
        <StyledMenuButton>Home</StyledMenuButton>
        <StyledMenuButton>About</StyledMenuButton>
        <StyledMenuButton>Blogs</StyledMenuButton>
        <StyledMenuButton>Events</StyledMenuButton>
        <StyledMenuButton>Donations</StyledMenuButton>
        <Button variant="contained" component="span">
          Log In
        </Button>
        <Button variant="contained" component="span">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default TopMenuBar;
