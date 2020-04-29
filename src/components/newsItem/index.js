import React from "react";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

export default function NewsItem(props) {
  return (
    <Grid item container justify="center" xs={6} spacing={1}>
      <Card className="news-card-root">
        <CardContent>
          <Typography
            className="news-title"
            variant="h5"
            color="textSecondary"
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography className="about-text" variant="body1">
            {props.text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
