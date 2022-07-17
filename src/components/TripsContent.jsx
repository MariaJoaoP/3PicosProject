import React from 'react';
import tripsData from '../data/tripsData';
import { useParams } from 'react-router-dom';

const TripsContent = () => {

    const param = useParams();
    const tripInfo = tripsData.filter (trip => trip.name === param.id);

    return (
        <div className='card my-3'>
            <div className='card-header py-3'>
                <h5 className='card-title'>{tripInfo[0].name}</h5>
                <h6 className='card-title'>{tripInfo[0].country}</h6>
                <h6 className='card-title'>{tripInfo[0].date}</h6>
            </div>
            <div className='card-body'> 
                <img className='img-fluid py-3' src={'/images/' + tripInfo[0].image} alt={tripInfo[0].name}/>
                <p className='card-text py-3'>{tripInfo[0].info}</p>
            </div>
        </div>
    )
}

export default TripsContent;

