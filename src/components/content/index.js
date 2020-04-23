import React from "react";

import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card"

import "./index.css";

export default function Content(props) {
  if (props.numbers === null) {
    return (
      <div className="progress">
        <LinearProgress />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="statistics-container">
        <div className="txt-border">
          <h1 className="content-title">Dados em tempo real</h1>
        </div>
        <div className="data-container">
          <div className="data">
            <div className="text">
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
            </div>
          </div>
        </div>
      </div>
      <Card>Teste cadr</Card>
    </div>
  );
}
