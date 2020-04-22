import React from "react";

import "./index.css";

export default function Header() {
  return (
    <header>
      <div className="overlay">
        <h1>Nem Tudo São Más Noticías</h1>
        <p>
          Este site foi criado para diminuir a tensão causado pelo coronavirus
          através da divulgação de boas noticias relacionadas ao covid-19
        </p>
      </div>
    </header>
  );
}
