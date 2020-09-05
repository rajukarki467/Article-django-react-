import React from "react"
import {Route, Switch} from "react-router-dom"
import Articlelist from "./Articlelist";
import Articledetail from "./Articledetail";



export default function Base(){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Articlelist} />
                <Route exact path='/:articleID' component={Articledetail} />
            </Switch>
        </div>
    )
}