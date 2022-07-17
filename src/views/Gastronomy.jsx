import React from 'react';
import {Outlet} from 'react-router-dom';

const Gastronomy = () => {

    return (
        <>
            <div className='Gastronomy container pt-4' >
            <Outlet></Outlet>
            </div>
        </>
    )
}

export default Gastronomy;

