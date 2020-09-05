import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class Articledetail extends Component {
    constructor() {
        super();
        this.state = {
            articles: {}
        };
    }
    componentDidMount() {
        const articleID = this.props.match.params.articleID; 
        console.log(articleID) 
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }
    render() {
        
        const {title, content} = this.state.articles
        return (
            <div>
                <h1>title: {title}</h1>
                <p>
                    content : {content} <br />{" "}
                </p>
                {/* updated button */}

                <Link to="/" >Home</Link>
            </div>
        )
    }
}

export default Articledetail