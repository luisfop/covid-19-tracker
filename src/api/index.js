import axios from 'axios'
import { config } from '../config/api'

export const fetchData = async (country) => {
    let customURL = config.baseUrl
    customURL += country ? `/countries/${country}` : ''
    const { data: { confirmed , recovered , deaths, lastUpdate } } = await axios.get(customURL)
    return { confirmed , recovered , deaths, lastUpdate }
}

export const fetchCountry = async () => {
    try{
        const response = await axios.get(`${config.baseUrl}/countries`)
        return response.data.countries.map((country)=> country.name)
    } catch(error) {
        console.error(error)
    }
}