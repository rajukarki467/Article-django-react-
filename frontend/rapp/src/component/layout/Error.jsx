import React from 'react'
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="container">
            <h1 className="text-center text-warning ">page not found <span className="text-danger">404 ERROR</span> </h1>
            <Link className="btn btn-outline-dark btn-large btn-block" to="/" >Home </Link>
        </div>
    )
}
