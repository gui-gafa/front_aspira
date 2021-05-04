import './App.css';
import { ThemeProvider, createMuiTheme, makeStyles, useTheme } from '@material-ui/core'
import Relacao_de_Obras from './Relacao_de_Obras';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { Rotate90DegreesCcw } from '@material-ui/icons';
import React from 'react'
import ReactDOM from 'react-dom';



//makeStyles cria um objeto de estilos pra usar dentro dos elementos
//bom pra estilar o conteúdo no próprio arquivo em vez de precisar de um .css

function App() {
  const theme = createMuiTheme({
    status: {
      danger: 'ff0000',
    },
    palette: {
      primary: {
        main : '#5d8aa8'
      },
      secondary: {
        main : '#ff0000'
      },  
    },
    zIndex: {
      appBar: 1500,
      drawer: 1200,
    },
    appBar: {
      zIndex: 1500
    },
    drawer: {
      zIndex: 1200
    }
  });



  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
        <Relacao_de_Obras theme={theme}></Relacao_de_Obras>
        </div>
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
