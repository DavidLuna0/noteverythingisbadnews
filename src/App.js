import React, { useEffect, useState } from "react";
import "./App.css";

import { getCountries, getCovidDataByCountry } from "./services";

import Header from './components/header'

export default function App(props) {
  const [countries, setCountries] = useState('brazil');
  const [recovered, setRecovered] = useState(0);
  const [sick, setSick] = useState(0);
  const [totalConfirmed, setTotalConfirmed] = useState(0)

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
    console.log(response)
    setRecovered(response.cases.recovered);
    setSick(response.cases.active);
    setTotalConfirmed(response.cases.total);
  }  

  return (
    <div className="App">
      <Header/>
    </div>
  );
}
