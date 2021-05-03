import { Grid } from '@material-ui/core';
import React from 'react'
import BarraTopo from './components/BarraTopo';
import BotaoSimples from './components/BotaoSimples';
import Grade from './components/Grade';
import BarraLateral from './components/BarraLateral';
import {Switch, Route, Link} from 'react-router-dom';
//import Home from './paginas/Home';
import config from './paginas/config';
import Obra from './paginas/obra.js';
import Home from './paginas/home.js';
import {generatePath} from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

let obras = [
    {
       id: "0",
       endereco: "/obra/0",
       titulo: "Novo H8",
       descricao: "Reforma do alojamento estudantil dos alunos do ITA.",
       cidade: "São José dos Campos-SP",
       cliente: "ITA",
       fonte: "MEC",
       foto: "/novo_h8.PNG"
    },
    {
        id: "1",
        endereco: "/obra/1",
        titulo: "Subestação",
        descricao: "Reforma da subestação de energia do DCTA.",
        cidade: "São José dos Campos-SP",
        cliente: "GAP-SJ",
        fonte: "EMAER/INPE",
        foto: "/predio_icea.PNG"
     },
     {
        id: "2",
        endereco: "/obra/2",
        titulo: "Rede de Água F2",
        descricao: "Reforma e acompanhamento da rede de água do DCTA.",
        cidade: "São José dos Campos-SP",
        cliente: "GAP-SJ",
        fonte: "EMAER",
        foto: "/rede_de_agua.PNG"
     },

];

let rota = 'texto';


const drawerWidth = 10000;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      grow: {
          flexGrow: 1
      },
}));


export default function Relacao_de_Obras({theme}) {
    
    const classes = useStyles();
    
    //exact serve pra só funcionar o link se o endereço estiver exatamente igual
    return (
        <Switch>
            <Route exact path='/' render={(props) => <Home {...props} nome='Relação de Obras' classes={classes} />}>
                
            </Route>

            <Route exact path='/config' component={config}>
                <BarraTopo/ > 
                <img src='logo192.png'></img>
            </Route>

            <Route exact path='/obra' render={(props) => <Obra {...props} nome='Teste' />}>
                
            </Route>
            {
                  obras.map((item, index) => (


                    rota = item.endereco,


                    <Route exact path={rota} render={(props) => <Obra {...props} nome={item.titulo} />}></Route>
                    
                  ))
              }
        </Switch>
    )
}