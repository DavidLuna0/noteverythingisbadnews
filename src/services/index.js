import axios from "axios";

import api from "../api";

export const getCountries = () => {
  const responseData = axios
    .get(`${api.baseUrl.concat(api.countries)}`, {
      headers: api.headers,
    })
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      return err;
    });
  return responseData;
};

export const getCovidDataByCountry = (country) => {
  const responseData = axios
    .get(`${api.baseUrl.concat(api.statistics)}?search=${country}`, {
      headers: api.headers,
    })
    .then((resp) => {
      return resp.data.response[0];
    })
    .catch((err) => {
      return err;
    });
  return responseData;
};
