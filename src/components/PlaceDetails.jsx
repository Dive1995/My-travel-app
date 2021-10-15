import React from 'react'
import Rating from 'react-rating'
import '../css/details.css'
import { FaGoogle, FaMapPin, FaMoneyBill, FaPhoneAlt,} from 'react-icons/fa'

function PlaceDetails({place,selected, refProp, i}) {

    if(selected) {
        refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

   
    return (
        <>
        {place?.name  && <a href={place?.website || place?.web_url} className="card" >
            <div className="card-img">
                <img src={ place.photo ? place.photo.images.large.url : "https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"} alt="" />
            </div>
            <div className="card-detail">
                <h4>{place.name}</h4>
                {place.address && <p><FaMapPin color="red"/> {place.address}</p>}
                {place.price && <p><FaMoneyBill color="green"/> {place.price}</p>}
                {place.phone && <p><FaPhoneAlt color="dodgerblue"/> {place.phone}</p>}
                <div className="rating-container">
                    <Rating
                    emptySymbol='fa fa-star-o yellow '
                    fullSymbol='fa fa-star yellow '
                    initialRating={Number(place.rating)}
                    readonly
                    />
                    <p>out of {place.num_reviews} reviews</p>
                </div>
            </div>
        </a>}
        </>
    )
}

export default PlaceDetails
