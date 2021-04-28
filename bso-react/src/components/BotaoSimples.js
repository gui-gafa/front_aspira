import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import {Switch, Route, Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
  },
}));

export default function BotaoSimples({nome}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <Link to='/config' style={{color: 'white',
                                    textDecoration: 'none'}} justify="flex-end" variant="contained" color="primary" startIcon={<AddIcon />} text-decoration='none' >
          {nome}
        </Link>
    </div>
  );



  


}