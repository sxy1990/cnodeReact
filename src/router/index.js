import React, { Component} from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent' 
const topic = asyncComponent(() => import('../views/Topic'))
const collect = asyncComponent(() => import('../views/Collect'))
const detail = asyncComponent(() => import('../views/Detail'))
const person = asyncComponent(() => import('../views/Person'))



export default class RouteConfig extends Component {
    render() {
        return (
            <Router>
                <Switch>
                   <Route path="/topic" exact component={topic} />
                   <Redirect exact from='/' to="/topic"/>
                   <Route path="/collect" exact component={collect} />
                   <Route path="/person" exact component={person} />
                   <Route path="/detail/:id" component={detail} />
                </Switch>
            </Router>
        )
    }
}