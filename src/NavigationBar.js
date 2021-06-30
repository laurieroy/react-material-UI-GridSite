import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  manuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
  siteTitle: {
    fontWeight: "bold",
    letterSpacing: 2,
  },
  toolBar: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <Container>
      <Toolbar className={classes.toolBar}>
        <Typography component="h1" variant="h4" className={classes.siteTitle}>
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
    </Container>
  );
}
