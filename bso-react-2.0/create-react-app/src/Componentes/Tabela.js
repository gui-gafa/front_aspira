import React from "react";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Tabs from "../components/CustomTabs/CustomTabs.js";
import Tasks from "../components/Tasks/Tasks.js";

import { bugs, website, server } from "../variables/general.js";

export default function DemoTabs() {
  return (
    <Tabs
      title="Feitos na Semana:"
      headerColor="primary"
      tabs={[
        {
          tabName: "Frentes Ativas",
          tabIcon: BugReport,
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
    />
  );
}