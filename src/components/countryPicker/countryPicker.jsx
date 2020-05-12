import React, { useState, useEffect} from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './countryPicker.module.css';
import cx from 'classnames';


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
        <div className={styles.pickerContainer}>
            <FormControl>
                <NativeSelect defaultValue="" className={cx(styles.optionPicker)} onChange={(e) => props.handleCountry( e.target.value)}>
                    <option defaultValue="Global">Global</option>
                    {fetchedCountries.map((country, i) => <option value={country} key={i}>{country}</option>)}
                </NativeSelect>
            </FormControl>
            
        </div>
    )
}


export default CountryPicker;