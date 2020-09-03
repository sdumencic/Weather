import React, { useState } from 'react';
import styles from './Weather.module.css';
import { motion } from "framer-motion";
import hot from '../../images/hot.png'
import warm from '../../images/warm.png'
import cold from '../../images/cold.png'

const Weather = ({ weather }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  const weatherHandler = () => {
    if (weather.weather[0].main === 'Sunny') {
      return '☀️';
    } else if(weather.weather[0].main === 'Clouds'){
      return '☁️';
    } else if(weather.weather[0].main === 'Rain') {
      return '🌧️';
    } else if(weather.weather[0].main === 'Clear') {
      return '☀️';
    }
  } 

  const temperatureHandler = () => {
    if(weather.main.temp >= '25') {
      return hot;
    } else if(weather.main.temp >= '17' && weather.main.temp < '25') {
      return warm;
    } else if(weather.main.temp < '17') {
      return cold;
    }
  }


  return (
    <motion.div className={styles.wrapper} initial="hidden"
      animate="visible"
      variants={list}>
      {weather.main && <motion.div className={styles.gridcontainer} variants={item} whileHover={{ scale: 1.2 }}>
        {Math.round(weather.main.temp)}°C
                </motion.div>}
      {weather.main && <motion.div className={styles.gridcontainer} variants={item} whileHover={{ scale: 1.2 }}>
        {weather.weather[0].main}
      </motion.div>}
      {weather.main && <motion.div className={styles.gridcontainer} variants={item} whileHover={{ scale: 1.2 }}>
        {weatherHandler()}
      </motion.div>}
      {weather.main && <motion.div className={styles.gridcontainer2} variants={item} whileHover={{ scale: 1.2 }}>
        Feels like: {Math.round(weather.main.feels_like)}
      </motion.div>}
      {weather.main && <motion.div className={styles.gridcontainer} variants={item} whileHover={{ scale: 1.2 }}>
        <img src={temperatureHandler()}/>
      </motion.div>}
    </motion.div>
  )
}
export default Weather;