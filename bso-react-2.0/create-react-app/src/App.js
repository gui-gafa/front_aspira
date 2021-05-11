import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Inicio from './Paginas/Inicio';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import RelacaodeObras from './Paginas/RelacaodeObras';
import Obra from './Paginas/Obra';


let obras = [
  {
     id: "0",
     endereco: "/Obras/0",
     titulo: "Novo H8",
     descricao: "Reforma do alojamento estudantil dos alunos do ITA.",
     cidade: "São José dos Campos-SP",
     cliente: "ITA",
     fonte: "MEC",
     fotos: {
      foto0: "/novo_h8.PNG",
      foto1: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      foto2: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    },
  },
  {
      id: "1",
      endereco: "/Obras/1",
      titulo: "Subestação",
      descricao: "Reforma da subestação de energia do DCTA.",
      cidade: "São José dos Campos-SP",
      cliente: "GAP-SJ",
      fonte: "EMAER/INPE",
      fotos: {
        foto0: "/predio_icea.PNG",
        foto1: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        foto2: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      },
  },
  {
      id: "2",
      endereco: "/Obras/2",
      titulo: "Rede de Água F2",
      descricao: "Reforma e acompanhamento da rede de água do DCTA.",
      cidade: "São José dos Campos-SP",
      cliente: "GAP-SJ",
      fonte: "EMAER",
      fotos: {
        foto0: "/rede_de_agua.PNG",
        foto1: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        foto2: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      },
      
  }
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" position='absolute' top='200px'>
      {'Copyright © '}
      <Link color="inherit" href="https://www.fab.mil.br/organizacoes/mostra/427/">
        CO-DCTA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let rota = '/Obras/0'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path='/' render={(props) => <Inicio {...props} />}></Route>
            <Route exact path='/Obras' render={(props) => <RelacaodeObras {...props} />}></Route>
            {/*<Route exact path='/'>
              <Home> nome="Relação de Obras" obras={obras}</Home>
            </Route>*/}
            {/*<Route exact path='/obra' render={(props) => <Obra {...props} nome='Teste' />}>
                
            </Route>*/}
            {
              obras.map((item, index) => (
                rota = item.endereco,
                <Route exact path={rota} render={(props) => <Obra {...props} obra={item} />}></Route>      
              ))
            }
      </Switch>
    </BrowserRouter>
  );
}
