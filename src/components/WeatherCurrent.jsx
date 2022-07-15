import React, {useState, useEffect} from 'react';
import WeatherCard from './WeatherCard';

const WeatherCurrent = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [location, setLocation] = useState('');

    navigator.geolocation.getCurrentPosition(function(position) {
        setLocation(position.coords.latitude.toFixed(5)+','+position.coords.longitude.toFixed(5));
    });

    useEffect(() => {
        if(location) {
        fetch('https://api.weatherapi.com/v1/forecast.json?key=51a8b08074374ad38ec115508221405&q='+location+'&days=3&aqi=no&alerts=no')
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setData(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error.message);
                }
            )
        }
    }, [location]);

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
                        </>
                    ): (
                    <div></div>
                    )}
                </div>
            </> 
        );
    }
}

export default WeatherCurrent;