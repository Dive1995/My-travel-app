import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useMediaQuery } from 'react-responsive'
import Rating from 'react-rating'
import '../css/map.css'

function Map({ coordinates, setCoordinates, setBounds, places, setChildClicked }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 600px)'
      })

    return (
        <div className="map">
            <GoogleMapReact
            //  process.env.REACT_APP_GOOGLE_MAP_API_KEY 
                bootstrapURLKeys={{ key: 'AIzaSyAfeLUENyaD8Hn5-03mg4oU84HNE_wW21I'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true }}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
            {places?.length && places.map((place, i) => (
                <div
                    className="markerContainer"
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                >
                {
                    !isDesktop ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    ):(
                        <div className="markerCard">
                            <h4>{place?.name}</h4>
                            <img width="100" src={ place?.photo ? place.photo.images.large.url : "https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"} alt="" />

                            <Rating
                                className="rating"
                                emptySymbol='fa fa-star-o yellow '
                                fullSymbol='fa fa-star yellow '
                                initialRating={Number(place.rating)}
                                readonly
                                />
                        </div>
                    )
                }
                    
                </div>
            ))}

            

            </GoogleMapReact>
        </div>
    )
}

export default Map
