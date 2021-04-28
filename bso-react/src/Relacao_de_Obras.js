import { Grid } from '@material-ui/core';
import React from 'react'
import BarraTopo from './components/BarraTopo';
import BotaoSimples from './components/BotaoSimples';
import Grade from './components/Grade';
import BarraLateral from './components/BarraLateral';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './paginas/Home';
import config from './paginas/config';
import Obra from './paginas/obra.js';
import {generatePath} from 'react-router';

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

export default function Relacao_de_Obras({theme}) {
    
    //exact serve pra só funcionar o link se o endereço estiver exatamente igual
    return (
        <Switch>
            <Route exact path='/' component={Home}>
                <BarraTopo nome='Relação de Obras'></BarraTopo>  
                <BarraLateral/ >
                <BotaoSimples nome='Adicionar Obra'></BotaoSimples>
                <Grade obras={obras} ></Grade>
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