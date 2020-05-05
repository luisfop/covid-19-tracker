import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async () => {
    let {data: {confirmed , recovered , deaths, lastUpdate }} = await axios.get(url)
    
    return { confirmed , recovered , deaths, lastUpdate}
};