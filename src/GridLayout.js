import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainGridItem: {
    backgroundColor: "blue",
  },
  secondRowFirstItem: {
    backgroundColor: "green",
  },
  secondRowSecondItem: {
    backgroundColor: "red",
  },
  thirdRowFirstItem: {
    backgroundColor: "red",
  },
  thirdRowSecondItem: {
    backgroundColor: "blue",
  },
  thirdRowThirdItem: {
    backgroundColor: "green",
  },
}));

export default function GridLayout() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} xs={12}>
				<Typography className={classes.mainGridItem}>Main Grid Item
				Main Grid Item
				Main Grid Item
				Main Grid Item
				Main Grid Item
				</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography className={classes.secondRowFirstItem}>
          Second Row, First Item
        </Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography className={classes.secondRowSecondItem}>
          Second Row, Second Item
        </Typography>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRowFirstItem}>
          Third Row, First Item
        </Typography>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRowSecondItem}>
          Third Row, Second Item
        </Typography>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRowThirdItem}>
          Third Row, Third Item
        </Typography>
      </Grid>
    </Grid>
  );
}
