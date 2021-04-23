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

let obras = [
    {
       titulo: "Novo H8",
       descricao: "Reforma do alojamento estudantil dos alunos do ITA.",
       cidade: "São José dos Campos-SP",
       cliente: "ITA",
       fonte: "MEC",
       foto: "/novo_h8.PNG"
    },
    {
        titulo: "Subestação",
        descricao: "Reforma da subestação de energia do DCTA.",
        cidade: "São José dos Campos-SP",
        cliente: "GAP-SJ",
        fonte: "EMAER/INPE",
        foto: "/predio_icea.PNG"
     },
     {
        titulo: "Rede de Água F2",
        descricao: "Reforma e acompanhamento da rede de água do DCTA.",
        cidade: "São José dos Campos-SP",
        cliente: "GAP-SJ",
        fonte: "EMAER",
        foto: "/rede_de_agua.PNG"
     },

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

export default function Grade() {
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
                                Detalhes
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