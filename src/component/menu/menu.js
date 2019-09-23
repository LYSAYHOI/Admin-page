import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  Grid,
  Button,
} from '@material-ui/core';
import style from './menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';

const sidebarWidth = 200;

const useStyles = makeStyles({
  contentWidth: {
    marginLeft: sidebarWidth,
  },
  sidebarSize: {
    width: sidebarWidth,
  },
});

class Menu extends React.Component {
  state = {
    isOpenSidebar: false,
    isShowNested: false,
  };
  openSidebar = () => {
    this.setState({ isOpenSidebar: true });
  };
  closeSidebar = () => {
    this.setState({ isOpenSidebar: false });
  };
  toggleNested = () => {
    this.setState({ isShowNested: !this.state.isShowNested });
  };
  render() {
    const { isOpenSidebar, isShowNested } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={style.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={this.openSidebar}
            >
              <FontAwesomeIcon icon="bars" />
            </IconButton>
            <Typography>News</Typography>
            {/* <Button color="inherit" className="float-right">
              Login
            </Button> */}

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={style.userInfo}
            >
              <Grid className={style.pl1}>
                <Avatar>H</Avatar>
              </Grid>
              <Grid className={style.pl1}>
                <p>Administrator</p>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Menu;
