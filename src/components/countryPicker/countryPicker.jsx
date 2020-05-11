import React from 'react';

const countryPicker = (props) => {
    return(
        <div>
            <h1 onClick={(e) => props.handleCountry()}>This is CountryPicker Component</h1>
            
        </div>
    )
}


export default countryPicker;