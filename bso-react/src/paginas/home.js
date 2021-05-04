import React from 'react';
import BarraTopo from '../components/BarraTopo';
import BarraLateral from '../components/BarraLateral';
import { ThemeProvider, createMuiTheme, makeStyles, useTheme} from '@material-ui/core'
import {Switch, Route, Link} from 'react-router-dom';

const Home = ({nome}, {theme}) => {
    return (

        <ThemeProvider theme={theme}>
            <div>
                <BarraTopo nome={nome} theme={theme}></BarraTopo>
                <BarraLateral theme ={theme}></BarraLateral>
            </div>
        </ThemeProvider>
            
            
        
        
    );
}

export default Home;