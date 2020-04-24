import React from "react";

import LinearProgress from "@material-ui/core/LinearProgress";
import MediaCard from "../card";

import "./index.css";

import sick from "../../assets/images/coronavirus.png";
import recovered from "../../assets/images/protected.png";
import locations from "../../assets/images/locations.png"

export default function Content(props) {
  if (props.numbers === null) {
    return (
      <div className="progress">
        <LinearProgress />
      </div>
    );
  }

  const activeText = "Estão atualmente doentes com o covid-19"
  const recoveredText = "Se recuperaram do covid-19 desde o inicio do surto"
  const totalText = "Foram infectados com o covid-19 desde o inicio do surto"

  return (
    <div className="container">
      <div className="statistics-container">
        <div className="txt-border">
          <h1 className="content-title">Dados em tempo real</h1>
        </div>
        <div className="data-container">
          <div className="data">
            <div className="cards">
              <MediaCard image={sick} value={props.numbers.active} text={activeText}></MediaCard>
            </div>
            <div className="cards">
              <MediaCard image={recovered} value={props.numbers.recovered} text={recoveredText}></MediaCard>
            </div>
            <div className="cards">
              <MediaCard image={locations} value={props.numbers.total} text={totalText}></MediaCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
