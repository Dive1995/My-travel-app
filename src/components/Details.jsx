import React, { createRef, useEffect } from 'react'
import '../css/details.css'
import { useState } from 'react'
import PlaceDetails from './PlaceDetails'


function Details({places, type, setType, ratings, setRatings, childClicked, isLoading}) {

    const [elRefs, setElRefs] = useState([])

    useEffect(() => {
        setElRefs(refs => Array(places?.length).fill().map((_, i) => refs[i] || createRef()))
    },[places])

    return (
        <div className="details-list">
            <h2>Resturants in Colombo</h2>
            <div className="configurations">
                <div className="place-options">
                    <label htmlFor="place">Place: </label>

                    <select name="place" id="place" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="restaurants">Resturant</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </div>
                <div className="rating--section">
                    <label htmlFor="rating">Rating: </label>

                    <select name="rating" id="rating" value={ratings} onChange={(e) => setRatings(e.target.value)}>
                        <option value="1">Greater than 1</option>
                        <option value="2">Greater than 2</option>
                        <option value="3">Greater than 3</option>
                        <option value="4.5">Greater than 4.5</option>
                    </select>
                </div>
            </div>

            { isLoading ? 
                (<div className="loading-container">
                    <div className="loading"></div>
                </div>) 
                :
                (places?.map( (place, i) => (
                <div className="cards" ref={elRefs[i]} key={i}>
                    <PlaceDetails 
                        place={place}
                        selected={Number(childClicked) === i}
                        refProp={elRefs[i]}
                    />
                </div>
            )))
            }

        </div>
    )
}

export default Details
