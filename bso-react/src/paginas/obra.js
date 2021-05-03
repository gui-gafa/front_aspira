import React from 'react';
import BarraTopo from '../components/BarraTopo';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'
import {Switch, Route, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Obra = ({nome}) => {
    return (

        
            <div>
                <BarraTopo nome='Teste'></BarraTopo>
                <h1 >
                    Contrato 102/2018 {nome}
                </h1>
                <p>
                    {nome}
                </p>
                <Button variant="contained" color="primary">
                    Botão teste
                </Button>
                
            </div>
            
            
        
        
    );
}

export default Obra;

