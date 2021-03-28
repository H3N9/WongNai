import React, { useEffect, useState } from "react"
import BoxContent from "../components/boxContent"
import { useLocation } from "react-router-dom"

const useQuery = () => {
    return new URLSearchParams(useLocation().search) // query search params
}

const Search = () => {
    const [trips, setTrips] = useState([])
    const url = "http://localhost:3001/trips"
    const query = useQuery()
    const keyword = query.get("keyword") ?? "" //get variable on search params and checking exited

    const fetchData = async (url, setJson) => {
        const response = await fetch(url)
        if (response.status === 200) {
            const json = await response.json()
            setJson(json)
        } else {
            setJson([])
            console.log(response.status)
        }
    }

    const searchHandle = async () => {
        const urlSearch = `${url}?keyword=${keyword}` 
        fetchData(urlSearch, setTrips)
    }

    useEffect(() => {
        fetchData(url, setTrips) // fetch data at first time
    }, [])

    useEffect(() => {
        searchHandle() // when keyword update, it will call searchHandle to set new url and call fetchData
    }, [keyword])

    const renderCard = (arr) => { //render Cards if they exit
        if(arr.length > 0){
            return (
                arr.map((trip) => (
                    <BoxContent key={trip.eid} trip={trip} />
                ))
            )
        }
        else{ // render no data when can't fetch any data or err occur at back-end or api gateway
            return (
                <h1>No data</h1>
            )
        }
        
    }

    return (
        <div id="contents">
            {renderCard(trips)}
        </div>
    )
}

export default Search
