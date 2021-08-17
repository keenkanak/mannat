import React from "react";
import "./NewsArticle.css";

const NewsArticle = ({ title, description, url, urlToImage }) => {
  return (
    <div className="newsArticle">
      <img className="newsArticle__img" src={urlToImage} alt="" />
      <h3>
        <a href={url} rel="noreferrer" target="_blank">
          {title}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsArticle;
