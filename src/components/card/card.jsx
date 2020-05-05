import React from 'react';
// import styles from './card.module.css';
// import { Card, CardContent , Typography, Grid } from '@material-ui/core';

const card = ({data: {confirmed, recovered, deaths, lastUpdate}} ) => {
    
    console.log('recovered ->', recovered)
    return(
        <div>
            <h1>Cards!</h1>
        </div>

    )
}


export default  card;