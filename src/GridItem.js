import React from "react";

import ArrowForward from "@material-ui/icons/ArrowForward";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  cardImage: {
    height: 300,
  },
});

export default function GridItem(props) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={props.title} subheader={props.subheader} />
      <CardMedia
        className={classes.cardImage}
        image={props.image}
        title="Excel Masterclass"
      />
      <CardContent>
        <Typography>{props.description} </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Visit page">
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
}
