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
                'x-rapidapi-key': 'cf8e0131d0msh3eec9a49059f7e3p1f6341jsn0d1a0ecdffbc'
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