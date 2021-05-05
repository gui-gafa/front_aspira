import React from 'react';
import BarraTopo from '../components/BarraTopo';
import BarraLateral from '../components/BarraLateral';
import Grade from '../components/Grade';
import Box from '@material-ui/core/Box';

const Home = ({nome}, {obras}) => {
    return (

        
            <div>
                <BarraTopo nome={nome} ></BarraTopo>
               
                    <BarraLateral ></BarraLateral>
                    <Grade obras={obras} ></Grade>
                
            </div>
        
            
            
        
        
    );
}

export default Home;