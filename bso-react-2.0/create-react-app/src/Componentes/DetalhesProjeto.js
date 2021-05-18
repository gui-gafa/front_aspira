import React from "react";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tabs from "../components/CustomTabs/CustomTabs.js";
import Tasks from "../components/Tasks/Tasks.js";
import GridItem from "../components/Grid/GridItem.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import Table from "../components/Table/Table.js";
import { makeStyles } from "@material-ui/core/styles";

import { bugs, website, server } from "../variables/general.js";
import AddIcon from '@material-ui/icons/Add';

import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function DetalhesProjeto() {
  const classes = useStyles();
  return (
        <GridItem >
          <Card>
            <CardHeader color="primary">
              <h2 className={classes.cardTitleWhite}>Detalhes do Projeto</h2>
              <p className={classes.cardCategoryWhite}>
                Última atualização em: 18/05/2021
              </p>
            </CardHeader>
            <CardBody>
              <Table
                /*tableHeaderColor="warning"
  tableHead={["ID", "Name"]}*/
                tableData={[
                  ["Registro", "DCTA-2019-5-SP-SV"],
                  ["Valor", "R$ 39.929.149,59"],
                  ["Prazo de Execução", "03/05/2021"],
                  ["Prazo de vigência", "17/08/2021"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
    /*<Tabs
      title="Detalhes do Projeto:"
      headerColor="primary"
      tabs={[
        {
          tabName: "Atualização",
          tabIcon: AddIcon,
          tabContent: (
            <Tasks
              checkedIndexes={[0, 3]}
              tasksIndexes={[0, 1, 2, 3]}
              tasks={bugs}
            />
          )
        },
        {
          tabName: "Website",
          tabIcon: Code,
          tabContent: (
            <Tasks
              checkedIndexes={[0]}
              tasksIndexes={[0, 1]}
              tasks={website}
            />
          )
        },
        {
          tabName: "Server",
          tabIcon: Cloud,
          tabContent: (
            <Tasks
              checkedIndexes={[1]}
              tasksIndexes={[0, 1, 2]}
              tasks={server}
            />
          )
        }
      ]}
    />*/
  );
}