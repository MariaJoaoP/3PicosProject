import React from 'react';
import './WeatherCard.css';

const WeatherCard = (props) => {

    const forecastInfo = props.weatherData.forecast.forecastday.map((day, index) => {
        const diasSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return (
                <div className='conditionForecast' key={index}> 
                    {diasSemana[(new Date(day.date)).getDay()]}
                    <img className='iconPequeno' src={day.day.condition.icon} alt={day.day.condition.text}/> 
                    {day.day.condition.text}
                </div>
        )
    })

    return (
        <>
            <div className='weatherCard card my-3'>
                <div className='card-header conditionCurrent'>
                    <> {props.closeBtn &&
                        <button className='btn-close closeButton' type='button' onClick={e => props.aoClicar(props.closeIndex)} aria-label="Close"></button>
                    }
                    </>
                    <img className='iconPequenoCurrent' src={props.weatherData.current.condition.icon} alt={props.weatherData.current.condition.text}/>
                    <h5> {props.weatherData.location.region}, {props.weatherData.location.country} </h5>
                    <div className="condition"> {props.weatherData.current.condition.text} - {props.weatherData.current.temp_c}º </div>
                    {(props.weatherData.current.is_day) == 1 ? 'Day' : 'Night'} 
                </div>
                <div className='card-body'>
                    {forecastInfo}
                </div>
            </div>
        </>
    )
}

export default WeatherCard;