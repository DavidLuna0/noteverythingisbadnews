import React, { useEffect } from "react";
import "./App.css";

import { getCountries, getCovidDataByCountry } from "./services";

export default function App(props) {
  useEffect(() => {
    handleStatisticsResponse();
    handleCountriesResponse();
  });

  async function handleCountriesResponse() {
    const response = await getCountries();
    console.log(response);
  }

  async function handleStatisticsResponse() {
    const response = await getCovidDataByCountry("brazil");
    console.log(response);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello React App</div>
      </header>
    </div>
  );
}
