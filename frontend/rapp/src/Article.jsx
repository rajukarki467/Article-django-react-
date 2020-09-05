import React from "react";

function Article(props) {
    
  return (
    <div>
      <h1>title: {props.title}</h1>
      <p>
        content : {props.content} <br />{" "}
      </p>
    </div>
  );
}
export default Article;
