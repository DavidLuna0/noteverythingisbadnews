import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./index.css";

export default function MediaCard(props) {
  return (
    <Card className="root">
      <CardActionArea>
        <CardMedia className="media" title="Active">
          <img className="image" src={props.image} alt="recipe thumbnail" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.value}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
