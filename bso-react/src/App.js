import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import Relacao_de_Obras from './Relacao_de_Obras';

function App() {
  const theme = createMuiTheme({
    status: {
      danger: 'ff0000',
    },
    palette: {
      primary: {
        main : '#5d8aa8'
      }
    }
  });

  return (
    <ThemeProvider>
      <div className="App">
        <Relacao_de_Obras/ > 
      </div>
    </ThemeProvider>
  );
}

export default App;
