import React from 'react';
import gastronomyData from '../data/gastronomyData';
import {Link, useParams} from 'react-router-dom';

const GastronomyContent = () => {

    const chosenRest = useParams();
    const restData = gastronomyData.filter (rest => rest.restaurantName==chosenRest.id);

    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <div className='d-grid gap-2 d-flex justify-content-end'>
                        <Link to={'/gastronomy/gastronomyMenu'} className='btn btn-dark me-md-2' role='button'>X</Link>
                    </div>
                    <h5 className='card-title'>{restData[0].restaurantName}</h5>
                    <h6 className='card-title'>{restData[0].city}</h6>
                    <h6 className='card-title'>{restData[0].country}</h6>
                    <h6 className='card-title'>{restData[0].date}</h6>
                </div>
                <div className='card-body'>
                    <img className='img-fluid' src={'/images/' + restData[0].image}  alt={restData[0].restaurantName} />
                    <p className='card-text pt-3'>{restData[0].info}</p>
                </div>
            </div>
        </>
    )
}

export default GastronomyContent;