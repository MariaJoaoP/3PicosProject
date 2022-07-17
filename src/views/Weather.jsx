import React, {useState, useEffect} from 'react';
import WeatherCurrent from '../components/WeatherCurrent';
import WeatherAdd from '../components/WeatherAdd';
import WeatherMultiple from '../components/WeatherMultiple';

const Weather = () => {
    const [coordinates, setCoordinates] = useState([]);
    const [input, setInput] = useState('');
    const [multipleLocations, setMultipleLocations] = useState(() => {
        const cities = JSON.parse(localStorage.getItem('cities'));
        if (cities) {
            return (cities);
        }
        else 
            return ([]);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setCoordinates([input]);
        setInput('');
    }
    
    const resetFav = () => {
        setMultipleLocations([]);
    }

    const addFavs = (item) => {
        const cities = JSON.parse(localStorage.getItem('cities'));
        cities.push(item);
        setMultipleLocations(cities);
    }

    const removeFav = (breakIndex) => {
        const cities = JSON.parse(localStorage.getItem('cities'));
        cities.splice(breakIndex, 1);
        setMultipleLocations(cities);
    }

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(multipleLocations));
    }, [multipleLocations]);

    return(
        <>
            <div className='Weather container h-100 py-3'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='col-xl-6 offset-md-2 currentCity'>
                            <div className='weatherElement my-4'>
                                <h4 className='h4 text-white mb-5'>O tempo na tua localização</h4>
                                <WeatherCurrent ></WeatherCurrent>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'> 
                        <div className='col-xl-6 offset-md-2 addCity' id='addCity'> 
                            <div className='weatherElement my-4'>
                                <h4 className='h4 text-white' >Verifica o tempo noutro local</h4> 
                                <div className='form__group'>
                                    <form id='formCity' onSubmit={handleSubmit}>
                                        <input type='text' className='form__input' value={input} onChange={(e)=>setInput(e.target.value)} id='city' placeholder='Cidade, País' required=''/>
                                        {/* <label htmlFor="city" className="form__label text-white">Escolhe uma cidade</label> */}
                                    </form>
                                </div>
                                {(coordinates!='') ? (<WeatherAdd coords={coordinates} aoClicar={addFavs}></WeatherAdd>) : (<div></div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col favCities'>
                        <div className='weatherElementMultiple mt-4'>
                            {(multipleLocations!='') ? <h4 className='h4 text-white'>O tempo nas tuas localizações favoritas</h4> : (<div></div>)};
                        </div>
                    </div>
                </div>
                <div className='row'>
                        {(multipleLocations!='') ? <WeatherMultiple coordsMulti={multipleLocations} aoClicar={removeFav}></WeatherMultiple> : (<div></div>)}
                </div>
                <div className='row my-5'>
                    <div className='col-md-6 offset-md-3'>
                        {(multipleLocations.length>1) ? <button type='button' className='btn btn-dark' onClick={() => resetFav()}>Limpar Favoritos</button> : (<div></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather;