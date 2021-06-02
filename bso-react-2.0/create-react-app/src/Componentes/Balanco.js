import React from "react";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import AddIcon from '@material-ui/icons/Add';
import BuildIcon from '@material-ui/icons/Build';

// core components
import Tabs from "../components/CustomTabs/CustomTabs.js";
import Tasks from "../components/Tasks/Tasks.js";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import Table from "../components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";
import CardIcon from "../components/Card/CardIcon.js";
import Danger from "../components/Typography/Danger.js";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import WorkIcon from '@material-ui/icons/Work';
import Icon from "@material-ui/core/Icon";
import Grid from '@material-ui/core/Grid';
import { bugs, website, server } from "../variables/general.js";
import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Balanco(props) {

  const { obra } = props;
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="primary">
                  <BuildIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Empenhado</p>
                <h3 className={classes.cardTitle}>90%</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="warning">
                  <WorkIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Executado</p>
                <h3 className={classes.cardTitle}>75%</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <DoneAllIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Medido</p>
                <h3 className={classes.cardTitle}>65%</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
  );
}