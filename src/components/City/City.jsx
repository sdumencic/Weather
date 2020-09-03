import React, {useState} from 'react';
import styles from './City.module.css';
import Weather from '../Weather/Weather';

const City = ({weather}) => {    

    return(
        <div>
            {(weather.main) && <div className={styles.locationbox}>
                <div className={styles.location}>{weather.name}</div>
                <div className={styles.date}>{new Date().toDateString()}</div>
            </div>}
            
        </div>
    )
}

export default City;