import React from 'react';
import BarraTopo from '../components/BarraTopo';
import BarraLateral from '../components/BarraLateral';
import Fotos from '../components/Fotos';



const Obra = ({nome}) => {
    return (

        
        <div>
            <BarraTopo nome={nome} ></BarraTopo>
            <BarraLateral ></BarraLateral>
            <Fotos></Fotos>
        </div>
            
            
        
        
    );
}

export default Obra;

