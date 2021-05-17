import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      background: '#16556e',
      text: {
        color: '#16556e',
      },
    },
    MuiBox: {
      background: '#16556e',
      text: {
        color: '#16556e',
      },
    },
  },
  palette: {
    primary: {
      main: '#5d8aa8',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#eaeff1',
    },
  },
});

export default theme;
