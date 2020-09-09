import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Add() {
    const history = useHistory();
    const [Adduser, setAdduser] = useState({
        title:'',
        content:'',
    })
    const {title, content} = Adduser;
    const inputChange = (e) =>  {
        setAdduser({
            ...Adduser,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = async  (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/", Adduser)
        history.push("/") 
    }
    return (
        <>
            <div className="container my-5">

                <form onSubmit={ onSubmit}>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Title..." 
                        name="title"
                        value={title}
                        onChange = {inputChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea onChange = {(e) => inputChange(e)} name="content" value={content} className="form-control" id="content" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" className="btn btn-primary mb-2 mx-2">Submit</button>
                        <Link className="btn btn-primary mb-2" to="/" >Home</Link>
                    </div>


                </form>
            </div>
        </>
    )
}