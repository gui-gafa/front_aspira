import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Switch, Route, Link} from 'react-router-dom';
import Obra from '../paginas/obra.js'



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height: 400
    },
    media: {
      height: 220,
    },
  });

export default function Grade({obras}) {
    const classes = useStyles();
    
    return (
      <div>
          <Grid container spacing='2'>
              {
                  obras.map((item, index) => (
                    <Grid item>
                        <Card className={classes.root} >
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={item.foto}
                                title={item.titulo}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.titulo}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.descricao}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions > 
                                <Button size="small" color="primary">
                                  <Link to={item.endereco} style={{color: '#5d8aa8',
                                                                  textDecoration: 'none'}}>
                                    detalhes
                                  </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                  ))
              }

          </Grid>
        
      </div>
    );
  }