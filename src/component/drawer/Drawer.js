import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './drawer.module.css';
import { Divider, Drawer } from '@material-ui/core';
import DrawerContent from './DrawerContent';
import DrawerProfile from './DrawerProfile';

const CustomDrawer = props => {
  const { open, variant, onClose, className, classes } = props;

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      //icon: <DashboardIcon />,
    },
    {
      title: 'Users',
      href: '/users',
      //icon: <PeopleIcon />,
    },
    {
      title: 'Products',
      href: '/products',
      //icon: <ShoppingBasketIcon />,
    },
    {
      title: 'Authentication',
      href: '/sign-in',
      //icon: <LockOpenIcon />,
    },
    {
      title: 'Typography',
      href: '/typography',
      //icon: <TextFieldsIcon />,
    },
    {
      title: 'Icons',
      href: '/icons',
      //icon: <ImageIcon />,
    },
    {
      title: 'Account',
      href: '/account',
      //icon: <AccountBoxIcon />,
    },
    {
      title: 'Settings',
      href: '/settings',
      //icon: <SettingsIcon />,
    },
  ];

  return (
    <Drawer
      classes={{ paper: classes }}
      anchor="left"
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div className={clsx(styles.root, className)}>
        <DrawerProfile />
        <Divider className={styles.divider} />
        <DrawerContent className={styles.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

CustomDrawer.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default CustomDrawer;
