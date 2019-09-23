import React from 'react';
import styles from './App.module.css';
import Topbar from './component/topbar/Topbar';
import Drawer from './component/drawer/Drawer';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faEnvelope,
  faLaptop,
  faInbox,
  faLock,
  faAngleRight,
  faAngleDown,
  faAngleLeft,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Dashboard from './component/dashboard/dashboard';
import { Grid } from '@material-ui/core';

library.add(
  faBars,
  faEnvelope,
  faLaptop,
  faInbox,
  faLock,
  faAngleRight,
  faAngleDown,
  faAngleLeft,
  faUser,
  faSearch,
);

function App() {
  return (
    <div className={styles.root}>
      <Grid className={styles.headerHeight}>
        <Topbar />
      </Grid>
      <Grid container>
        <Grid item md={2} lg={2}>
          <Drawer classes={styles.drawer} variant="permanent" open={true} />
        </Grid>
        <Grid item sm={12} md={10} lg={10}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
