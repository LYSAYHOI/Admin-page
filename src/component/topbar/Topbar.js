import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  useScrollTrigger,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './topbar.module.css';

// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  return (
    <AppBar position="static" className={styles.topbar}>
      {/* <ElevationScroll {...props}> */}
      <Toolbar>
        <Box mr={3}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <FontAwesomeIcon icon="user" />
          </IconButton>
        </Box>
        <Typography variant="h6" className={styles.pageTitle}>
          Demo web
        </Typography>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <FontAwesomeIcon icon="search" />
          </div>
          <InputBase placeholder="Search…" className={styles.searchBox} />
        </div>
      </Toolbar>
      {/* </ElevationScroll> */}
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
