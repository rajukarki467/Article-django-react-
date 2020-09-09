import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"

function Article(props) {
    const history = useHistory();
    const loaduser = () => {
      history.push('/Add/Deletee')
    }
    const deleteuser = async (id) =>{
      await axios.delete(`http://localhost:8000/api/${id}/`)
      loaduser();
    }    
  return (
    <div>
      <h1>title: {props.title}</h1>
      <p>
        content : {props.content} <br />{" "}
      </p>
      {/* updated button */}

      <Link to= {`/${props.articleID}`} className="btn btn-outline-primary mx-1" >View</Link>
      <Link to= {`/Edit/${props.articleID}`} className="btn btn-outline-warning mx-1" >Edit</Link>
      <Link onClick={()=> deleteuser(props.articleID)} className="btn btn-outline-danger mx-1" >Delete</Link>
    </div>
  );
}
export default Article;
