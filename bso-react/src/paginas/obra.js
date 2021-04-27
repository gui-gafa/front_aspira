import React from 'react';
import BarraTopo from '../components/BarraTopo';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'
import {Switch, Route, Link} from 'react-router-dom';

const Obra = ({obra},{theme}) => {
    return (

        <ThemeProvider theme={theme}>
            <div>
                <BarraTopo nome={obra.titulo}></BarraTopo>
                <h1 font color="#000099">
                    Contrato 102/2018
                </h1>
                <img src={obra.foto}></img>
                
            </div>
            <Link to='/config' >
                Página config
            </Link>
            
        </ThemeProvider>
        
    );
}

export default Obra;

