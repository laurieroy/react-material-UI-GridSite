import React from "react";

import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 400,
    // backgroundImage: "url(https://unsplash.com/photos/vpOeXr5wmR4)",
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg)",
    color: theme.palette.common.white,
    // backgroundSize: "cover",
  },
  mainItem: {
    padding: theme.spacing(6),
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default function MainGridItem() {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.mainItem} md={6}>
        <Typography component="h2" variant="h5">
          Hello Coding
        </Typography>

        <Typography variant="body2" paragraph>
          Do you want to learn to code? Smash your career goals, build websites,
          games, apps and artificial inteligence projects.
        </Typography>
      </Grid>
    </Grid>
  );
}
