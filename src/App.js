import { useEffect, useState } from "react";
import { getPlacesData } from "./api";
import Details from "./components/Details";
import Home from "./components/Home";
import Map from "./components/Map";
import Nav from "./components/Nav";


function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lng:0, lat:0});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState('resturants')
  const [ratings, setRatings] = useState(5)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setCoordinates({lat:coords.latitude, lng:coords.longitude})
    })
  },[])

  useEffect(() => {
    console.log(type);
    console.log(coordinates, bounds);
    if(bounds){
      getPlacesData(bounds.sw, bounds.ne)
      .then(res => {
        // console.log(res)
        setPlaces(res)})
      .catch(err => console.log(err))

    }
  },[type, coordinates, bounds]) 

  return (
    <div className="App">
      {/* <Home/> */}
      <Nav/>
      <div className="details">
          <Details 
            places={places} 
            setType={setType}
            setRatings={setRatings}
          />
        <div className="map-container">
          <div className="map-section">
              <Map 
                setCoordinates={setCoordinates} 
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
              />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
