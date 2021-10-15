import React from 'react'
import Rating from 'react-rating'
import '../css/details.css'

function PlaceDetails({place,selected, refProp, i}) {

    if(selected) {
        refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <a href={place?.website || place?.web_url} className="card" >
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
                out of {place.num_reviews} reviews
            </div>
        </a>
    )
}

export default PlaceDetails
