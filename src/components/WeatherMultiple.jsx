import React, {useState, useEffect} from 'react';
import WeatherCard from './WeatherCard';

const WeatherMultiple = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [dataMulti, setDataMulti] = useState([]); 

    useEffect(() => {
        setDataMulti([]);
        props.coordsMulti.map((coord) => {
            fetch('https://api.weatherapi.com/v1/forecast.json?key=51a8b08074374ad38ec115508221405&q='+coord+'&days=3&aqi=no&alerts=no')
                .then(res => res.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setData(data);            
                        setDataMulti(dataMulti => [...dataMulti, {data}]);            
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        })
    }, [props.coordsMulti]);
   
    
    const displayForecast = (dataMulti) => {
        const dataMultiInfo = dataMulti.map ((el, index) => {
            return (
                <div className='col-md-6 col-xl-4' key={index}>
                        <WeatherCard weatherData={el.data} closeBtn={true} aoClicar={props.aoClicar} closeIndex={index} ></WeatherCard>
                </div> 
            )
        });
        return (
            <>
                {dataMultiInfo}
            </>
        )
    }

        if (error) {
            return <div><div>Error: {error.message}</div></div>;
        } else if (!isLoaded) {
            return <div><div>Loading...</div></div>;
        } else {
            return(
                <>
                    <div className='FetchInfoMultiple row' > 
                        {(typeof data.location != 'undefined') ? (
                            displayForecast(dataMulti)
                        ): (
                        <div>Error: {data.error.message}</div>
                        )}
                    </div>
                </> 
            );
        }
}

export default WeatherMultiple;