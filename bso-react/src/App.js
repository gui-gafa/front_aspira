import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import H8 from './H8';

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
        <H8/ >
      </div>
    </ThemeProvider>
  );
}

export default App;
