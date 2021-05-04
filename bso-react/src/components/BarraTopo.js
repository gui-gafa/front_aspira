import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';


const useStyles =makeStyles((theme) => ({
  grow:{
    flexGrow: 1
  },
}));

export default function BarraTopo({nome}) {

  const classes = useStyles();
  return (
    
    <div>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton>
            <img src='/fablogo.png' alt='' height = '30'/>
          </IconButton>
          <div className={classes.grow}/>
          {/*Essa próxima div serve só pra colocar o nome da página no meio da tela */}
          <Typography variant="h6">
            {nome}
          </Typography>
          {/*Essa próxima div serve só pra colocar um espaço entre o nome da página e o ícone de login */}
          <div className={classes.grow}/>
          <Button color="inherit" startIcon={<AccountCircleIcon />}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}