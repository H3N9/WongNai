import React, { useEffect, useState } from 'react'
import '../styles/searchStyles.css'
import BoxContent from '../components/boxContent'




const Search = () => {
    const [trips, setTrips] = useState([])
    const url = 'http://localhost:9000/trips'

    useEffect(() => {
        fetchData(url, setTrips)
    }, [])

    return (
        <>
            <div id="header-box">
                เที่ยวไหนดี
            </div>

            <div id="seach-bar">

            </div>

            <div id="contents">
                {trips.map((trip) => (<BoxContent key={trip.eid} trip={trip} />))}
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