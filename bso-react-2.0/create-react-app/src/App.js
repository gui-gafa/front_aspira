import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import axios from 'axios';
import Inicio from './Paginas/Inicio';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import RelacaodeObras from './Paginas/RelacaodeObras';
import Obra from './Paginas/Obra';


let obras2 = [
  {
     id: "0",
     endereco: "/Obras/0",
     titulo: "Novo H8",
     descricao: "Reforma do alojamento estudantil dos alunos do ITA.",
     cidade: "São José dos Campos-SP",
     cliente: "ITA",
     fonte: "MEC",
     fotos: [
      {
        img: "/novo_h8.PNG",
        data: '13/05/2021',
      },
       {
         img: "/rede_de_agua.PNG",
         data: '11/05/2021',
       },
       {
        img: "/predio_icea.PNG",
        data: '12/05/2021',
      },
      {
        img: "/novo_h8.PNG",
        data: '13/05/2021',
      },
       {
         img: "/rede_de_agua.PNG",
         data: '11/05/2021',
       },
       {
        img: "/predio_icea.PNG",
        data: '12/05/2021',
      },
      {
        img: "/novo_h8.PNG",
        data: '13/05/2021',
      },
       {
         img: "/rede_de_agua.PNG",
         data: '11/05/2021',
       },
       {
        img: "/predio_icea.PNG",
        data: '12/05/2021',
      },
      ] 
    },

  {
      id: "1",
      endereco: "/Obras/1",
      titulo: "Subestação",
      descricao: "Reforma da subestação de energia do DCTA.",
      cidade: "São José dos Campos-SP",
      cliente: "GAP-SJ",
      fonte: "EMAER/INPE",
      fotos: [
        {
          img: "/predio_icea.PNG",
          data: '13/05/2021',
        },
         {
           img: "/novo_h8.PNG",
           data: '11/05/2021',
         },
         {
          img: "/rede_de_agua.PNG",
          data: '12/05/2021',
        },
        {
          img: "/novo_h8.PNG",
          data: '13/05/2021',
        },
         {
           img: "/rede_de_agua.PNG",
           data: '11/05/2021',
         },
         {
          img: "/predio_icea.PNG",
          data: '12/05/2021',
        },
        {
          img: "/novo_h8.PNG",
          data: '13/05/2021',
        },
         {
           img: "/rede_de_agua.PNG",
           data: '11/05/2021',
         },
         {
          img: "/predio_icea.PNG",
          data: '12/05/2021',
        },
      ]
  },

  {
      id: "2",
      endereco: "/Obras/2",
      titulo: "Rede de Água F2",
      descricao: "Reforma e acompanhamento da rede de água do DCTA.",
      cidade: "São José dos Campos-SP",
      cliente: "GAP-SJ",
      fonte: "EMAER",
      fotos: [
        {
          img: "/rede_de_agua.PNG",
          data: '13/05/2021',
        },
         {
           img: "/predio_icea.PNG",
           data: '11/05/2021',
         },
         {
          img: "/novo_h8.PNG",
          data: '12/05/2021',
        }, 
        {
          img: "/novo_h8.PNG",
          data: '13/05/2021',
        },
         {
           img: "/rede_de_agua.PNG",
           data: '11/05/2021',
         },
         {
          img: "/predio_icea.PNG",
          data: '12/05/2021',
        },
        {
          img: "/novo_h8.PNG",
          data: '13/05/2021',
        },
         {
           img: "/rede_de_agua.PNG",
           data: '11/05/2021',
         },
         {
          img: "/predio_icea.PNG",
          data: '12/05/2021',
        },
      ]   
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

  const [obras, setObra] = useState([]);
  const [medidas, setMedida] = useState([]);

    useEffect(() => {
      async function getData(){
        const res = await axios.get(`https://api-codcta.herokuapp.com/api/v1/constructions`, {headers:  {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}});
        setObra(res.data)
        const res2 = await axios.get(`https://api-codcta.herokuapp.com/api/v1/executed_measures`, {headers:  {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}});
        setMedida(res2.data)
      }
      
      
      getData();
    }, []);


  console.log(medidas.construction_id)  
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
                <Route exact path={`/Obras/${item.id}`} render={(props) => <Obra {...props} obra={item} />}></Route>      
              ))
            }
      </Switch>
    </BrowserRouter>
  );
}
