import React, {useState} from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import './App.css';
import City from './components/City/City';
import Weather from './components/Weather/Weather';
import { motion } from "framer-motion"

const App = () => {
  const [weather, setWeather] = useState({});

  const temperature = () => {
    if(weather.main !== undefined) {
      if(weather.main.temp < 20) {
        return "App"
      } else if(weather.main.temp >= 20) {
        return "Appwarm"
      } 
    } else {
      return "Appdefault"
    }
  }

  return (
    <div className={temperature()}>
      <Searchbar setWeather={setWeather} className/>
      {weather.main && <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
      <City weather={weather}/>
      <Weather weather={weather}/>
      </motion.div>}
    </div>
  );
}

export default App;
