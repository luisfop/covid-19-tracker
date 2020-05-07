import React from 'react';
import styles from './card.module.css';
import { Card, CardContent , Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';


const card = ({data: {confirmed, recovered, deaths, lastUpdate}} ) => {

    if(!confirmed){
        return 'LOADING...'
    }

    console.log('RECOVERED' ,recovered)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={ Card } xs={12} md={3} className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de casos confirmados com COVID-19</Typography>   
                    </CardContent>
                </Grid>

                <Grid item component={ Card } xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de casos recuperados com COVID-19</Typography>   
                    </CardContent>
                </Grid>

                <Grid item component={ Card } xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de mortos pelo COVID-19</Typography>   
                    </CardContent>
                </Grid>

            </Grid>
            
        </div>
    )
}


export default  card;