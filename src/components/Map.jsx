import React from 'react'
import GoogleMapReact from 'google-map-react'

function Map() {
    const coordinates = { lat: 0, lng: 0}

    return (
        <div className="map">
            <GoogleMapReact
            //  process.env.REACT_APP_GOOGLE_MAP_API_KEY 
                bootstrapURLKeys={{ key: 'AIzaSyAfeLUENyaD8Hn5-03mg4oU84HNE_wW21I'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={3}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                // setCoords({ lat: e.center.lat, lng: e.center.lng });
                // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                // }}
                onChildClick={''}
            >
            
            </GoogleMapReact>
        </div>
    )
}

export default Map
