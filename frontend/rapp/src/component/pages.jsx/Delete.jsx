import React from "react"
import { Link } from "react-router-dom";

export default function Delete(){
    return (
        <>
        <h1>Your file is deleted.....</h1>
        <Link className="btn btn-secondary" to="/">Home</Link>
        </>
    )
}