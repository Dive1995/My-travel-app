import React, { createRef, useEffect } from 'react'
import '../css/details.css'


import { useState } from 'react'
import PlaceDetails from './PlaceDetails'

function Details({places, setType, setRatings, childClicked, isLoading}) {

    console.log(childClicked);
    const [elRefs, setElRefs] = useState([])
    // console.log(elRefs);

    useEffect(() => {
        setElRefs(refs => Array(places?.length).fill().map((_, i) => refs[i] || createRef()))
    },[places])

    return (
        <div className="details-list">
            <h2>Resturants in Colombo</h2>
            <div className="configurations">
                <div className="place-options">
                    <label for="place">Place: </label>

                    <select name="place" id="place">
                        <option value="resturant" onClick={() => setType('resturants')}>Resturant</option>
                        <option value="hotel" onClick={() => setType('hotels')}>Hotels</option>
                        <option value="attractions" onClick={() => setType('attractions')}>Attractions</option>
                    </select>
                </div>
                <div className="rating-section">
                    <label htmlFor="rating">Rating: </label>
                    <ul className="ratings" id="rating">
                        <li><button className="btn-star" onClick={() => setRatings('resturants')}>1</button></li>
                        <li><button className="btn-star">2</button></li>
                        <li><button className="btn-star">3</button></li>
                        <li><button className="btn-star">4</button></li>
                    </ul>
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
