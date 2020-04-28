import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import "./index.css";

export default function About() {
  return (
    <Grid spacing={3} className="container">
      <Grid item container justify="center">
        <Card className="root-about">
          <CardContent>
            <Typography
              className="about-title"
              variant="h5"
              color="textSecondary"
              gutterBottom
            >
              O Site
            </Typography>
            <Typography className="about-text" variant="body1">
              Este site foi criado com o intuito de informar a todos sobre a
              atual situação do Covid-19 no Brasil e espalhar boas notícias a
              fim de reduzir o estresse e a ansiedade causados por todo este
              problema que o mundo está passando. 
              <br/>
              Nossa intenção é trazer um
              sentimento de otimismo em meio a tantas noticias ruins que
              recebemos no dia a dia
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
