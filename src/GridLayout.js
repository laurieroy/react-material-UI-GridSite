import React from "react";
import Grid 					from "@material-ui/core/Grid";
import Typography 		from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import MainGridItem from "./MainGridItem";
import GridItem from "./GridItem";

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
		<Grid item lg={12} sm={12} xs={12}>
			<MainGridItem />
			</Grid>
			
      <Grid item md={6} sm={12} xs={12}>
				<GridItem 
					className={classes.secondRowFirstItem}
					title="Excel Masterclass"
					subheader="recommended for you" 
					description="					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo laborum, iusto, recusandae error quos repellat impedit tempora eius iste, illo sunt commodi. Quibusdam quam officiis in dolores, deleniti inventore.
					"
					image="https://cdn.pixabay.com/photo/2015/09/05/22/46/business-925900_1280.jpg"
				>
          Second Row, First Item
        </GridItem>
			</Grid>
			
      <Grid item lg={6} md={6} sm={12} xs={12}>
				<GridItem
					className={classes.secondRowFirstItem}
					title="Photoshop Masterclass"
					subheader="recommended for you"
					description="					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo laborum, iusto, recusandae error quos repellat impedit tempora eius iste, illo sunt commodi. Quibusdam quam officiis in dolores, deleniti inventore.
					"
					image="https://cdn.pixabay.com/photo/2020/12/31/21/03/deer-5877407_1280.jpg"
				/>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
				<GridItem 
					className={classes.secondRowFirstItem}
					title="Side Hustles"
					subheader="recommended for you" 
					description="					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo laborum, iusto, recusandae error quos repellat impedit tempora eius iste, illo sunt commodi. Quibusdam quam officiis in dolores, deleniti inventore.
					"
          image="https://cdn.pixabay.com/photo/2020/01/20/19/08/modelling-4781127_1280.jpg"
					/>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
				<GridItem 
					className={classes.secondRowFirstItem}
					title="Python Masterclass"
					subheader="recommended for you" 
					description="					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo laborum, iusto, recusandae error quos repellat impedit tempora eius iste, illo sunt commodi. Quibusdam quam officiis in dolores, deleniti inventore.
					"
					image="https://cdn.pixabay.com/photo/2021/01/21/14/44/laptop-5937580_1280.jpg"
				/>
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
				<GridItem 
					className={classes.secondRowFirstItem}
					title="Other Masterclass"
					subheader="recommended for you" 
					description="					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nemo laborum, iusto, recusandae error quos repellat impedit tempora eius iste, illo sunt commodi. Quibusdam quam officiis in dolores, deleniti inventore.
					"
					image="https://cdn.pixabay.com/photo/2020/12/31/17/39/man-5877068_1280.jpg"
				/>
      </Grid>
    </Grid>
  );
}
