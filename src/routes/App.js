import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
        </BrowserRouter>
    )
}
