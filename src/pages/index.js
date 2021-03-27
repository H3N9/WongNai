import React, { useState, useEffect } from 'react'
import {Switch,Route,Redirect, useHistory, useLocation} from "react-router-dom"
import Search from './search'
import '../styles/searchStyles.css'


const Index = () => {
    const [textSearch, setTextSearch] = useState("")
    const history = useHistory()
    const query = useQuery()
    const keyword = query.get("keyword")?? ""

    const submitHandle = (e) => {
        e.preventDefault()
        const searchParams = new URLSearchParams()
        if(textSearch){
            searchParams.append("keyword", textSearch)
        }
        else{
            searchParams.delete("keyword")
        }
        history.push({search: searchParams.toString()})

    }

    useEffect(() => {
        setTextSearch(keyword)
    }, [keyword])




    return (
        <>
            <div id="header-box">
                <h1>เที่ยวไหนดี</h1>
            </div>

            <div id="seach-bar">
                    <form onSubmit={submitHandle} id="seach-bar-box">
                        <input id="search" value={textSearch} onChange={(e) => setTextSearch(e.target.value)}  placeholder="หาที่เที่ยวแล้วไปกัน..." />
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

            
        </>
    )
}

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}



export default Index
