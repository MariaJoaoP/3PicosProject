import React from 'react';
import {Link} from 'react-router-dom';
import gastronomyData from '../data/gastronomyData';

const Gastronomy = () => {

    const gastronomyList = gastronomyData.map ( (rest, index) => {
        
        return (
            <div className='col' key={index} >
                <div className='card text-bg-dark h-100' >
                    <img src={'/images/' + rest.menuImage} className='card-img' alt={rest.restaurantName}></img>
                    <Link className='card-link nav-link' to={'/Gastronomy/'+rest.restaurantName}>
                        <div className='card-body pt-4 pb-3'>
                            <h6 className='card-title'>{rest.restaurantName}</h6>
                            <h6 className='card-title'>{rest.city}</h6>
                        </div>
                    </Link>
                </div>
            </div>
        )
    })

    return(
        <>
            <div className='Gastronomy container pt-4' >
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-4'>
                    {gastronomyList}
                </div>
            </div>
        </>
    )
}

export default Gastronomy;

