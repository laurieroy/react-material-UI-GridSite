import React, { useEffect, useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  manuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  menuIcon: {
    color: "white"
  },
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
    color: 'white'
  },
  siteTitle: {
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  toolBar: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
}));

export default function NavigationBar() {
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false,
  });

  const { toggleMenu, toggleMenuOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
        : setState((prevState) => ({ ...prevState, toggleMenu: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const classes = useStyles();

  const displayLargeMenu = () => {
    return (
      <Toolbar className={classes.toolBar}>

        <Typography component="h1" variant="h5" className={classes.siteTitle}>
          Mammoth Interactive
        </Typography>
        <Box className={classes.menuBox}>
          {["home", "courses", "sign up"].map((menuOption) => (
            <Link
              component="button"
              variant="body1"
              className={classes.menuOption}
            >
              {menuOption.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    );
  };

  const displayToggleMenu = () => {
    const handleToggleMenuClose = () =>
      setState((prevState) => ({
        ...prevState,
        toggleMenuOpen: false,
      }));

    const handleToggleMenuOpen = () =>
      setState((prevState) => ({
        ...prevState,
        toggleMenuOpen: true,
      }));

    return (
      <Toolbar>
        <IconButton
          {...{
            onClick: handleToggleMenuOpen,
          }}
        >
          <MenuIcon className={classes.menuIcon}/>
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: toggleMenuOpen,
            onClose: handleToggleMenuClose,
          }}
        >
          <div>{getToggleMenuOptions()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getToggleMenuOptions = () => {
    return (
      <Box>
        {["home", "courses", "sign up"].map((menuOption) => (
          <MenuItem>{menuOption}</MenuItem>
        ))}
      </Box>
    );
  };

  return (
    <Container>
      <AppBar>{toggleMenu ? displayToggleMenu() : displayLargeMenu()}</AppBar>
    </Container>
  );
}
