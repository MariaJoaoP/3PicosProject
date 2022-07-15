import React, {useState, useEffect} from 'react';
import WeatherCard from './WeatherCard';
import './WeatherAdd.css';

const WeatherAdd = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.weatherapi.com/v1/forecast.json?key=51a8b08074374ad38ec115508221405&q='+props.coords+'&days=3&aqi=no&alerts=no')
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setData(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [props.coords]);

    if (error) {
        return <div><div>Error: {error.message}</div></div>;
    } else if (!isLoaded) {
        return <div><div>Loading...</div></div>;
    } else {
        return(
            <>
            <div className='FetchInfo'> 
                {(typeof data.location != 'undefined') ? (
                    <>
                        <WeatherCard weatherData={data}></WeatherCard>
                        <button type="button" className='btn btn-dark' onClick={e => props.aoClicar(data.location.name+', '+data.location.country)}>Adiciona aos favoritos</button>
                        <p className='textWeatherAdd'>Adiciona aos teus favoritos para veres todas as localizações mesmo depois de fechares a página.</p>
                    </>
                ): (
                <div>Error: {data.error.message}</div>
                )}
            </div>
            </> 
        );

    }
}

export default WeatherAdd;