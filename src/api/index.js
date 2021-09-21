import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (sw,ne) => {

    try{
        const resp = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'e782653f11mshe956113f06a9b7cp1accf4jsn47ee1d2a85d9'
        }
            
        })
        // console.log(resp.data.data);
        const data = resp.data.data
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}