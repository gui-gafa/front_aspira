import React from 'react';
import BarraTopo from '../components/BarraTopo';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'

const Obra = ({obras},{theme}) => {
    return (

        <ThemeProvider theme={theme}>
            <div>
                <BarraTopo nome={obras[1].titulo}></BarraTopo>
                <h1 font color="#000099">
                    Contrato 102/2018
                </h1>
                <img src={obras[1].foto}></img>
            </div>
            
        </ThemeProvider>
        
    );
}

export default Obra;

