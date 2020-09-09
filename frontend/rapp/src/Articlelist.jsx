import React, { Component } from "react";
import Article from "./Article";
import axios from "axios";
import { Link } from "react-router-dom";


class Articlelist extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          articles: res.data.reverse()
        });
        // console.log(res.data)
      })
  }
  render() {
    var { articles } = this.state
    // updated button
    const shw = articles.map(list => <Article title={list.title} content={list.content} articleID={list.id} />)
    return (
      <div>
        <Link to='/Add' className="btn btn-outline-success btn-block my-1">Add Article</Link>
        {shw}

      </div>
    )
  }
}

export default Articlelist;