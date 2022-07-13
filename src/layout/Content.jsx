import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../views/Home';
import Trips from '../views/Trips';
import Gastronomy from '../views/Gastronomy';
import Weather from '../views/Weather';
import Motorcycles from '../views/Motorcycles';
import AboutUs from '../views/AboutUs';
import NotFound from '../views/NotFound';

const Content = () => (
    <main className='Content h-100'>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/trips" element={<Trips />} ></Route>
            <Route path="/gastronomy" element={<Gastronomy />} ></Route>
            <Route path="/weather" element={<Weather />} ></Route>
            <Route path="/motorcycles" element={<Motorcycles />} ></Route>
            <Route path="/aboutus" element={<AboutUs />} ></Route>
            <Route path="*" element={<NotFound />} ></Route>
        </Routes>
    </main>
)

export default Content;

