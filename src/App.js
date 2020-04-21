import React, { useEffect, useState } from "react";
import "./App.css";

import { getCountries, getCovidDataByCountry } from "./services";

export default function App(props) {
  const [countries, setCountries] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [sick, setSick] = useState(0);

  useEffect(() => {
    handleStatisticsResponse();
    handleCountriesResponse();
  }, []);

  async function handleCountriesResponse() {
    const response = await getCountries();
    setCountries(response);
  }

  async function handleStatisticsResponse() {
    const response = await getCovidDataByCountry("brazil");
    setRecovered(response.cases.recovered);
    setSick(response.cases.active);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <div>Hello React App</div>
      </header>
    </div>
  );
}
