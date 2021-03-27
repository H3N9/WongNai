import React, { useEffect, useState } from 'react'
import '../styles/searchStyles.css'
import BoxContent from '../components/boxContent'




const Search = () => {
    const [trips, setTrips] = useState([])
    const [tripsSearch, setTripsSearch] = useState([])
    const url = 'http://localhost:9000/trips'

    const searchEnging = (target, trip) => {
        const tagMatching = trip.tags.filter((value) => value.includes(target))
        const title = trip.title.toLocaleLowerCase()
        const description = trip.description.toLocaleLowerCase()
        const toLowerOftext = target.toLocaleLowerCase()
        if(title.includes(toLowerOftext) || description.includes(toLowerOftext) || tagMatching.length > 0){
            return trip
        }
        return false
    }

    const searchHandle = (e) => {
        const search_value = e.target.value
        const result = trips.filter((trip) => searchEnging(search_value, trip))
        setTripsSearch(result)
    }

    useEffect(() => {
        fetchData(url, setTrips)
    }, [])

    useEffect(() => {
        setTripsSearch(trips)
        console.log("Runing")
    }, [trips])

    return (
        <>
            <div id="header-box">
                <h1>เที่ยวไหนดี</h1>
            </div>

            <div id="seach-bar">
                <div  id="seach-bar-box">
                    <input id="search" onChange={searchHandle}  placeholder="หาที่เที่ยวแล้วไปกัน..." />
                </div>
                
            </div>

            <div id="contents">
                {tripsSearch.map((trip) => (<BoxContent key={trip.eid} trip={trip} />))}
            </div>
        </>
    )
}

const fetchData = async (url, setJson) => {
    const response = await fetch(url)
    if (response.status === 200) {
        const json = await response.json()
        setJson(json)
    }
    else {
        setJson([])
    }

}



export default Search