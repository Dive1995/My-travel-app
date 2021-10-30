import '../css/nav.css'
import React, { useState } from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {FaSearch} from 'react-icons/fa'

function Nav({ setCoordinates }) {
    const [autocomplete, setAutocomplete] = useState(null)

    const onLoad = (autoCom) => setAutocomplete(autoCom);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()

        setCoordinates({ lat, lng })
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Traveller</h1>
            </div>
            <Autocomplete 
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
            >
            <div className="search">
                <FaSearch color="grey"/>
                <input type="text" placeholder="Search here"/>
                {/* <button className="btn btn-search">Search</button> */}
            </div>
            </Autocomplete>
            <ul>
                <li className="sign-in">Sign in</li>
            </ul>
        </nav>
    )
}

export default Nav
