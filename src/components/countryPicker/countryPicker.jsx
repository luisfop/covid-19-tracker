import React, { useState, useEffect} from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
// import styles from './countryPicker.module.css';


import { fetchCountry } from '../../api/index';

const CountryPicker = (props) => {

    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
             setFetchCountries( await fetchCountry());
        }
        fetchAPI();
    },[setFetchCountries]);

    return(
        <div>
            <FormControl>
                <NativeSelect defaultValue="" onChange={(e) => props.handleCountry( e.target.value)}>
                    <option defaultValue="Global"> Global</option>
                    {fetchedCountries.map((country, i) => <option value={country} key={i}>{country}</option>)}       
                </NativeSelect>
            </FormControl>
            
        </div>
    )
}


export default CountryPicker;