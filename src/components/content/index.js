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
            {/* <div className="text">
              UM TOTAL DE{" "}
              <span className="data-border">{props.numbers.total}</span> PESSOAS
              FORAM DIAGNOSTICADAS COM COVID-19 NO BRASIL DESDE O INICIO DO
              SURTO
              <br />
            </div>
            <div className="text">
              MAS ATUALMENTE APENAS{" "}
              <span className="data-border">{props.numbers.active}</span> AINDA
              SE ENCONTRAM DOENTES
              <br />
            </div>
            <div className="text">
              POIS UM TOTAL DE{" "}
              <span className="data-border">{props.numbers.recovered}</span>{" "}
              PESSOAS SE CURARAM DA DOENÇA
            </div>
            <div className="text info">
              A CADA DIA MAIS PESSOAS SÃO CURADAS DO COVID-19, TEMOS UM TOTAL DE
              PESSOAS CURADAS MAIOR QUE A QUANTIDADE DE DOENTES ATUALMENTE.
              DEIXEMOS DE LADO OS PENSAMENOS NEGATIVOS E FAÇAMOS O OTIMISMO CRESCER EM NÓS
            </div> */}
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
