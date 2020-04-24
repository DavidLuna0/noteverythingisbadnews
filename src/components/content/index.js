import React from "react";

import { LinearProgress, Grid } from "@material-ui/core";
import MediaCard from "../card";

import "./index.css";

import sick from "../../assets/images/medical-mask.png";
import recovered from "../../assets/images/protected.png";
import brazil from "../../assets/images/brazil.png";

export default function Content(props) {
  if (props.numbers === null) {
    return (
      <div className="progress">
        <LinearProgress />
      </div>
    );
  }

  const activeText = "Pessoas estão atualmente infectados com o covid-19";
  const recoveredText = "Se recuperaram do covid-19 desde o inicio do surto";
  const totalText = "Foram infectados com o covid-19 desde o inicio do surto";

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid item container justify="center" xs={12}>
        <div className="txt-border">
          <h1 className="content-title">Dados em tempo real</h1>
        </div>
      </Grid>
      <Grid item container justify="center" xs>
        <MediaCard
          image={sick}
          value={props.numbers.active}
          text={activeText}
        ></MediaCard>
      </Grid>
      <Grid item container justify="center" xs>
        <MediaCard
          image={recovered}
          value={props.numbers.recovered}
          text={recoveredText}
        ></MediaCard>
      </Grid>
      <Grid item container justify="center" xs>
        <MediaCard
          image={brazil}
          value={props.numbers.total}
          text={totalText}
        ></MediaCard>
      </Grid>
    </Grid>
  );
}
