import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) => {
    let customURL = url

    if(country){
        customURL = `${customURL}/countries/${country}`
    }


    let {data: {confirmed , recovered , deaths, lastUpdate }} = await axios.get(customURL)

    return { confirmed , recovered , deaths, lastUpdate}
};



export const fetchCountry = async () => {
    try{

        const response = await axios.get(`${url}/countries`)
        
        const data = response.data.countries;
        
        return data.map((country)=> country.name)

    } catch(error) {
        console.log(error)
    }
}