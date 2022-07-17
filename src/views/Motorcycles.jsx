import React from 'react';
import motorcyclesData from '../data/motorcyclesData';
import {Link, Outlet} from 'react-router-dom';

const Motorcycles = ( ) => {

    const motorcyclesList = motorcyclesData.map( (moto, index) => {
        const motorcyclesUl = document.querySelector('#motorcyclesUl');
        const handleClickMoto = () => {
            motorcyclesUl.classList.toggle('hide');
        }

        return (
            <li className='nav-item mx-2' key={index}>
                <Link className='dropdown-item nav-link' onClick={handleClickMoto} to={`/Motorcycles/${moto.model}`}>{moto.brand} {moto.model}</Link>
            </li>   
        )
    });

    const handleImageMoto = () => {
        const motorcyclesInitial = document.querySelector('#motorcyclesInitial');
        motorcyclesInitial.classList.add('hide');
    }

    return (
        <>
            <div className='Motorcycles container h-100 pt-5' id='motorcycles'>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark' id='motorcyclesNavbar'>
                    <div className='container-fluid'>
                        <h4 className='navbar-brand'> </h4>
                        <button className='navbar-toggler' type='button' onClick={handleImageMoto} data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav' id='motorcyclesUl'>
                                {motorcyclesList}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Motorcycles;