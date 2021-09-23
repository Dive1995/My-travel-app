import React from 'react'
import '../css/details.css'
import Map from './Map'
import Rating from 'react-rating'

function Details({places, setType, setRatings}) {

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
                            <Rating
                            emptySymbol='fa fa-star-o yellow '
                            fullSymbol='fa fa-star yellow '
                            initialRating={Number(place.rating)}
                            readonly
                            />
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Details
