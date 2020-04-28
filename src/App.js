import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./App.css";

import { getCountries, getCovidDataByCountry } from "./services";

import PageShell from "./components/pageShell";
import Header from "./components/header";
import Content from "./components/content";
import About from "./components/about";
import News from "./components/news";

export default function App(props) {
  const [countries, setCountries] = useState("brazil");
  const [statistics, setStatistics] = useState(null);
  const [value, setValue] = useState(1);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(countries);
  console.log(statistics);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Sobre" component={Link} to="/about" />
          <Tab label="Dados do Covid-19" component={Link} to="/data" />
          <Tab label="Noticias" component={Link} to="/news" />
        </Tabs>
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/data" render={() => <Content numbers={statistics} />} />
          <Route path="/news" render={() => <News/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
