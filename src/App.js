import React, { useEffect, useState } from "react";
import "./App.css";

import { getCountries, getCovidDataByCountry } from "./services";

import Header from "./components/header";
import Content from "./components/content";

export default function App(props) {
  const [countries, setCountries] = useState("brazil");
  const [statistics, setStatistics] = useState(null);

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
    setStatistics({
      recovered: response.cases.recovered,
      active: response.cases.active,
      total: response.cases.total,
      deaths: response.deaths.total,
      country: response.country,
    });
  }
  console.log(countries);
  console.log(statistics);

  return (
    <div className="App">
      <Header />
      <Content numbers={statistics} />
    </div>
  );
}
