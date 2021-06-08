import React from "react";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import WarningIcon from '@material-ui/icons/Warning';

// core components
import Tabs from "../components/CustomTabs/CustomTabs.js";
import Tasks from "../components/Tasks/Tasks.js";

import { frentesativas, alertas} from "../variables/general.js";

export default function Tabela(props) {
  
  const { obra, medida} = props;

  return (
    <Tabs
      title="Feitos na Semana:"
      headerColor="primary"
      tabs={[
        {
          tabName: "Alertas",
          tabIcon: WarningIcon,
          tabContent: (
            <Tasks
              checkedIndexes={[0, 3]}
              tasksIndexes={[0, 1, 2]}
              tasks={alertas}
            />
          )
        },
        {
          tabName: "Frentes Ativas",
          tabIcon: Code,
          tabContent: (
            <Tasks
              checkedIndexes={[0]}
              tasksIndexes={[0, 1, 2, 3]}
              tasks={frentesativas}
            />
          )
        },
      ]}
    />
  );
}