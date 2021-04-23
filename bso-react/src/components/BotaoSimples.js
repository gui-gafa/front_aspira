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
      <Button justify="flex-end" variant="contained" color="primary" startIcon={<AddIcon />}>
        <Link to='/config'>
          {nome}
        </Link>
      </Button>
    </div>
  );
}