import React from 'react'
import '../css/details.css'
import Map from './Map'

function Details({places}) {
    console.log(places);
    return (
        <div className="details-list">
            <h2>Resturants in Colombo</h2>
            <div className="configurations">
                <div className="place-options">
                    <label for="place">Place: </label>

                    <select name="place" id="place">
                        <option value="resturant">Resturant</option>
                        <option value="hotel">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </div>
                <div className="rating-section">
                    <label htmlFor="rating">Rating: </label>
                    <ul className="ratings" id="rating">
                        <li><button className="btn-star">1</button></li>
                        <li><button className="btn-star">2</button></li>
                        <li><button className="btn-star">3</button></li>
                        <li><button className="btn-star">4</button></li>
                    </ul>
                </div>
            </div>

            {places?.map( (place) => (
                <div className="cards">
                    <div className="card">
                        <div className="card-img">
                            <img src={ place.photo ? place.photo.images.large.url : "https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"} alt="" />
                        </div>
                        <div className="card-detail">
                            <h4>{place.name}</h4>
                            <p>{place.address}</p>
                            <p>{place.price}</p>
                            <p>{place.phone}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Details
