import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import BarraLateral from '../Componentes/BarraLateral';
import BarraTopo from '../Componentes/BarraTopo';
import Fotos from '../Componentes/Fotos';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FrentesAtivas from '../Componentes/FrentesAtivas';
import Alertas from '../Componentes/Alertas';
import {
  Box,
  Container,
  Grid,
  Icon,
  Card,
  Table,
  CardHeader,

} from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import CodeIcon from '@material-ui/icons/Code';
import CloudIcon from '@material-ui/icons/Cloud';
import { DriveEtaTwoTone } from '@material-ui/icons';
import Tabela from '../Componentes/Tabela';
import DetalhesProjeto from '../Componentes/DetalhesProjeto';
import Balanco from '../Componentes/Balanco';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.fab.mil.br/organizacoes/mostra/427/">
        CO-DCTA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#5d8aa8',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
    overrides: {
      MuiCard: {
        root: {
          fontSize: '1rem',
          background: '#63ccff',
        },
      },
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};

function Obra(props) {
  const { classes, obra} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <BarraLateral
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <BarraLateral PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <BarraTopo onDrawerToggle={handleDrawerToggle} nome={obra.object_name}/>
          <main className={classes.main}>
            
            
            <Box
              sx={{
                minHeight: '100%',
                py: 3
              }}
            >
              <Container maxWidth={false}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    lg={8}
                    md={12}
                    xl={9}
                    xs={12}
                  >
                    
                    <Balanco {...props} obra={obra}/>
                    <Tabela />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    xl={3}
                    xs={12}
                  >
                    <DetalhesProjeto/ >
                  </Grid>
                  <Box>
                    {/*<Fotos fotos={obra.fotos}></Fotos>*/}
                  </Box>
                </Grid> 
              </Container>
            </Box> 
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

Obra.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Obra);