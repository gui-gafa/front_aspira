import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './paginas/Home';
import config from './paginas/config';
import obra from './paginas/obra.js';

// => Significa função direta, na prática da na mesma que dar um nome pra função, mas é mais prático

export default () => {

    //exact só funciona se o endereço estiver exatamente igual
    return(
        <Switch>
            <Route exact path='/' component={Home}>
                
            </Route>

            <Route exact path='/config' component={config}>
            </Route>

            <Route exact path='/obra' component={obra}>
            </Route>


        </Switch>
    );

}