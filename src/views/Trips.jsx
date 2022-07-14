import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import tripsData from '../data/tripsData';

const Trips = () => {

    const tripsList = tripsData.map( (trip, index) => {
        const tripsUl = document.querySelector('#tripsUl');
        function handleClick () {
            tripsUl.classList.toggle('hide');
        }

        return (
            <li className="nav-item mx-2" key={index}>
                <Link className="dropdown-item nav-link" onClick={handleClick} to={`/Trips/${trip.name}`}>{trip.name}</Link>
            </li>
        )
    });
    
    const handleImage = () => {
        const tripsInitial = document.querySelector('#tripsInitial');
        tripsInitial.classList.add('hide');
    }

    return (
        <>
            <div className='Trips container h-100 pt-5' id='trips'>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark' id='tripsNavbar'>
                    <div className='container-fluid'>
                        <h4 className='navbar-brand'> </h4>
                        <button className='navbar-toggler' type='button' onClick={handleImage} data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav' id='tripsUl'>
                            {tripsList}
                        </ul>
                        </div>
                    </div>
                </nav>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Trips;