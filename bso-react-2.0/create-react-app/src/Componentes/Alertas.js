import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Icon
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { AlternateEmailSharp } from '@material-ui/icons';
import WarningIcon from '@material-ui/icons/Warning';

const alertas = [
  {
    id: uuid(),
    name: 'Inauguração dos blocos D e E',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Recebiemento provisório',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Segundo reajuste',
    updatedAt: moment().subtract(3, 'hours')
  },
];

const Alertas = (props) => (
  <Card {...props} color='#eaeff1'>
    <CardHeader
      subtitle={`${alertas.length} in total`}
      title="Alertas"
      avatar={
        <Icon>
            <WarningIcon/ >
        </Icon>
    
      }
      
    />
    <Divider />
    <List>
      {alertas.map((alerta, i) => (
        <ListItem
          divider={i < alerta.length - 1}
          key={alerta.id}
        >
          
          <ListItemText
            primary={alerta.name}
            secondary={`Created ${alerta.updatedAt.fromNow()}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default Alertas;