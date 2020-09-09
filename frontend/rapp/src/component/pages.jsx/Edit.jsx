import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function Edit() {
    const history = useHistory();
    const {id} = useParams();
    const [Edituser, setEdituser] = useState({
        title:'',
        content:'',
    })
    const {title, content} = Edituser;
    const inputChange = e =>  {
        setEdituser({
            ...Edituser,
            [e.target.name] : e.target.value
        })
    }
    useEffect(() => {
        loaduser();
    },[])
    const onSubmit = async e => {
        e.preventDefault();
        console.log("submitted");
        await axios.put(`http://localhost:8000/api/${id}/`, Edituser)
        history.push("/") 
    }
    const loaduser = async () => {
        const result = await axios.get(`http://localhost:8000/api/${id}`)
        setEdituser(result.data)
        console.log(id)
    }
    return (
        <>
            <div className="container my-5">

                <form onSubmit={onSubmit}>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Title..." 
                        name="title"
                        value={title}
                        onChange = { e => inputChange(e)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea onChange = {e => inputChange(e)} name="content" value={content} className="form-control" id="content" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <button className="btn btn-primary mb-2 mx-2">Submit</button>
                        <Link className="btn btn-primary mb-2" to="/" >Home</Link>
                    </div>


                </form>
            </div>
        </>
    )
}