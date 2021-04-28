import React from 'react';
import BarraTopo from '../components/BarraTopo';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'
import {Switch, Route, Link} from 'react-router-dom';

const Obra = ({nome}) => {
    return (

        
            <div>
                <BarraTopo nome='Teste'></BarraTopo>
                <h1 font color="#000099">
                    Contrato 102/2018 {nome}
                </h1>
                <p>
                    {nome}
                </p>
                
                
            </div>
            
            
        
        
    );
}

export default Obra;

