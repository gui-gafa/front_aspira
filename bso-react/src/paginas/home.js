import React from 'react';
import BarraTopo from '../components/BarraTopo';
import BarraLateral from '../components/BarraLateral';
import { ThemeProvider, createMuiTheme, makeStyles, useTheme} from '@material-ui/core'
import {Switch, Route, Link} from 'react-router-dom';

const Home = ({nome}, {classes}) => {
    return (

        
            <div>
                <BarraLateral classes ={classes}></BarraLateral>
                <BarraTopo nome={nome} classes={classes}></BarraTopo>
                
            </div>
            
            
        
        
    );
}

export default Home;