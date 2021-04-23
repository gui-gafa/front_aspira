import { Grid } from '@material-ui/core';
import React from 'react'
import BarraTopo from './components/BarraTopo';
import BotaoSimples from './components/BotaoSimples';
import Grade from './components/Grade';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './paginas/Home';
import config from './paginas/config';

export default function Relacao_de_Obras() {
    return (
        <Switch>
            <Route exact path='/' component={Home}>
                <BarraTopo/ >  
                <BotaoSimples nome='Adicionar Obra'></BotaoSimples>
                <Grade/ >
            </Route>

            <Route exact path='/config' component={config}>
                <BarraTopo/ > 
            </Route>
            
        </Switch>
    )
}