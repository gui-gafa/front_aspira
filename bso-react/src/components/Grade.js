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
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

let obras1 = [
  {
     id: "0",
     endereco: "/obra/0",
     titulo: "Novo H8",
     descricao: "Reforma do alojamento estudantil dos alunos do ITA.",
     cidade: "São José dos Campos-SP",
     cliente: "ITA",
     fonte: "MEC",
     foto: "/novo_h8.PNG",
  },
  {
      id: "1",
      endereco: "/obra/1",
      titulo: "Subestação",
      descricao: "Reforma da subestação de energia do DCTA.",
      cidade: "São José dos Campos-SP",
      cliente: "GAP-SJ",
      fonte: "EMAER/INPE",
      foto: "/predio_icea.PNG",
  },
  {
      id: "2",
      endereco: "/obra/2",
      titulo: "Rede de Água F2",
      descricao: "Reforma e acompanhamento da rede de água do DCTA.",
      cidade: "São José dos Campos-SP",
      cliente: "GAP-SJ",
      fonte: "EMAER",
      foto: "/rede_de_agua.PNG",
  }
];

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height: 400
    },
    media: {
      height: 220,
    },
  });

export default function Grade(props) {
    const classes = useStyles();
    
    
    return (
       <Box >
          <Toolbar/ >
          <Grid container spacing='2'>
              {
                  obras1.map((item, index) => (
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
                                  <Link to={item.endereco} style={{color: '#5d8aa8', textDecoration: 'none'}}>
                                    detalhes
                                  </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                  ))
              }
          </Grid>    
        </Box>
    );
  }

