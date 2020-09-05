import React from "react";
import { Link } from "react-router-dom";

function Article(props) {
    
  return (
    <div>
      <h1>title: {props.title}</h1>
      <p>
        content : {props.content} <br />{" "}
      </p>
      {/* updated button */}

      <Link to= {`/${props.articleID}`} >View</Link>
    </div>
  );
}
export default Article;
