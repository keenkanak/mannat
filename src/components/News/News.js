import React, { useState, useEffect } from "react";
import NewsArticle from "./NewsArticle/NewsArticle";
import Axios from "axios";
import "./News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [target, setTarget] = useState("covid");

  const getArticles = async () => {
    const res = await Axios.get(
      `http://localhost:5001/mannat-7fcf2/us-central1/newsApi?target=${target}`
    );
    const data1 = res.data;
    setArticles(data1.articles);
    console.log(data1);
    console.log(`yo yo`);
    console.log(articles);
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="news">
      <div className="news__header">
        <div className="news__title">
          <h2>Latest Updates</h2>
        </div>
        <div className="news__search">
          <input
            className="news__target"
            type="text"
            onChange={(event) => setTarget(event.target.value)}
          />
          <button className=" news__target__submit" onClick={getArticles}>
            Search
          </button>
        </div>
      </div>
      <div className="news__articles__wrapper">
        {articles?.map(({ title, description, url, urlToImage }) => (
          <NewsArticle
            key={Math.random()}
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default News;

//Dev
// http://localhost:5001/mannat-7fcf2/us-central1/newsApi?target=${target}
//Prod
// https://us-central1-mannat-7fcf2.cloudfunctions.net/newsApi?target=${target}
