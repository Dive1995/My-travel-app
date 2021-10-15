import { useEffect, useState } from "react";
import { getPlacesData } from "./api";
import Details from "./components/Details";
import Home from "./components/Home";
import Map from "./components/Map";
import Nav from "./components/Nav";
import './css/app.css'


function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lng:0, lat:0});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [type, setType] = useState('restaurants')
  const [ratings, setRatings] = useState(1)


  // filter places by ratings
  useEffect(() => {
    const filtered = places?.filter(place => place.rating > ratings)
    setFilteredPlaces(filtered)
  }, [ratings])

  // set coordinates by users location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setCoordinates({lat:coords.latitude, lng:coords.longitude})
    })
  },[])

  // get data from RapidAPI
  useEffect(() => {
    setIsLoading(true)
    if(bounds){
      getPlacesData(type, bounds.sw, bounds.ne)
      .then(res => {
        // console.log(res)
        setPlaces(res)
        setFilteredPlaces([])
        setIsLoading(false)
      })
      .catch(err => console.log(err))

    }
  },[type, bounds]) 

  return (
    <div className="App">
      {/* <Home/> */}
      <Nav setCoordinates={setCoordinates}/>
      <div className="details">
          <Details 
            places={filteredPlaces?.length ? filteredPlaces : places} 
            type={type}
            setType={setType}
            ratings={ratings}
            setRatings={setRatings}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        <div className="map-container">
          <div className="map-section">
              <Map 
                setCoordinates={setCoordinates} 
                setBounds={setBounds}
                coordinates={coordinates}
                places={filteredPlaces?.length ? filteredPlaces : places} 
                setChildClicked={setChildClicked}
              />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
