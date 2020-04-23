import React from "react";

import "./index.css";

export default function Content(props) {
  return (
    <div className="container">
      <div className="statistics-container">
        <div className="txt-border">
          <h1 className="content-title">Dados em tempo real</h1>
        </div>
        <div className="data"></div>
      </div>
    </div>
  );
}
