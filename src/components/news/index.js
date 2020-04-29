import React, {useState} from "react";
import { Grid } from "@material-ui/core";

import "./index.css";

import NewsItem from "../newsItem";

export default function News() {
  
  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");

  const title1 = "Titulo da Noticia 1"
  const title2 = "Titulo da Noticia 2"
  const text1 = "Esta é a noticia asgsagasgdagasgsgagdgfshfshdfhfhsjdasjsjsjsjsjs js jsdfh sfjsjs ";
  const text2 = "Esta é a noticia asgsagasgdagasgsgagdgfshfshdfhfhsjdasjsjsjsjsjs js jsdfh sfjsjs 2"

  return (
    <Grid className="news-container" justify="center" container spacing={3}>
      <NewsItem title={title1} text={text1} />
      <NewsItem title={title2} text={text2} />
      <NewsItem title={title1} text={text1} />
      <NewsItem title={title2} text={text2} />
    </Grid>
  );
}
