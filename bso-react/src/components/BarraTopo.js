import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ThemeProvider, createMuiTheme, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1100
  }
}))


export default function BarraTopo({nome}, {theme}) {

  const classes=useStyles();
  return (
    
    <div className={classes.appBar}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={{theme}.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton>
            <img src='/fablogo.png' alt='' height = '30'/>
          </IconButton>
          <Typography variant="h6" className={{theme}.title}>
            {nome}    
          </Typography>
          <Button color="inherit" startIcon={<AccountCircleIcon />}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
   
  );
}