import React, { useEffect, useState } from "react"
import BoxContent from "../components/boxContent"
import { useLocation } from "react-router-dom"

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const Search = () => {
    const [trips, setTrips] = useState([])
    const [tripsSearch, setTripsSearch] = useState([])
    const url = "http://localhost:9000/trips"
    const query = useQuery()
    const keyword = query.get("keyword") ?? ""

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

    const searchEnging = (target, trip) => {
        const tagMatching = trip.tags.filter((value) => value.includes(target))
        const title = trip.title.toLocaleLowerCase()
        const description = trip.description.toLocaleLowerCase()
        const toLowerOftext = target.toLocaleLowerCase()
        if (
            title.includes(toLowerOftext) ||
            description.includes(toLowerOftext) ||
            tagMatching.length > 0
        ) {
            return trip
        }
        return false
    }

    const searchHandle = () => {
        const result = trips.filter((trip) => searchEnging(keyword, trip))
        setTripsSearch(result)
    }

    useEffect(() => {
        fetchData(url, setTrips)
    }, [])

    useEffect(() => {
        searchHandle()
    }, [trips, keyword])

    const renderCard = (arr) => {
        if(arr.length > 0){
            return (
                arr.map((trip) => (
                    <BoxContent key={trip.eid} trip={trip} />
                ))
            )
        }
        else{
            return (
                <h1>No data</h1>
            )
        }
        
    }

    return (
        <div id="contents">
            {renderCard(tripsSearch)}
        </div>
    )
}

export default Search
