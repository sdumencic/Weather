import React, {useState} from 'react';
import styles from './Searchbar.module.css';

const api = {
    key: /*your key*/,
    base: 'https://api.openweathermap.org/data/2.5/'
}

const Searchbar = ({setWeather}) => {
    const [query, setQuery] = useState('');

    const search = (event) => {
        if (event.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
            });                
        }
    }

    return(
        <div>
            <div className={styles.main}>
                <div className={styles.searchbox}>
                    <input type="text" className={styles.searchbar} placeholder="Search..." 
                    onChange={event => setQuery(event.target.value)} value={query} onKeyPress={search}/>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;