import React, { useState } from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import Search from './search'
import '../styles/searchStyles.css'

const Index = () => {
    const [textSearch, setTextSearch] = useState("")
    const [sumitted, setSubmitted] = useState(false)
    const searchHandle = (e) => {
        const result = e.target.value
        setTextSearch(result)
    }

    const submitHandle = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }


    return (
        <Router>
            <div id="header-box">
                <h1>เที่ยวไหนดี</h1>
            </div>

            <div id="seach-bar">
                    <form onSubmit={submitHandle} id="seach-bar-box">
                        <input id="search" value={textSearch} onChange={searchHandle}  placeholder="หาที่เที่ยวแล้วไปกัน..." />
                    </form>
                
            </div>

            <Switch>
                <Route exact path="/">
                    <Redirect to="/trips"/>
                </Route>

                <Route path="/trips">
                    <Search />
                </Route>

            </Switch>

            
        </Router>
    )
}

export default Index
