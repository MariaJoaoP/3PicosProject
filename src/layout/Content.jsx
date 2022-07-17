import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../views/Home';
import Trips from '../views/Trips';
import Gastronomy from '../views/Gastronomy';
import Weather from '../views/Weather';
import Motorcycles from '../views/Motorcycles';
import AboutUs from '../views/AboutUs';
import NotFound from '../views/NotFound';
import TripsContent from '../components/TripsContent';
import TripsInitial from '../components/TripsInitial';
import MotorcyclesInitial from '../components/MotorcyclesInitial';
import MotorcyclesContent from '../components/MotorcyclesContent';
import GastronomyMenu from '../components/GastronomyMenu';
import GastronomyContent from '../components/GastronomyContent';

const Content = () => (
    <main className='Content h-100'>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/trips" element={<Trips />} >
                <Route path="/trips/tripsinitial" element={<TripsInitial />}></Route>
                <Route path="/trips/:id" element={<TripsContent />}></Route>
            </Route>
            <Route path="/gastronomy" element={<Gastronomy />} >
                <Route path="/gastronomy/gastronomyMenu" element={<GastronomyMenu />}></Route> 
                <Route path="/gastronomy/:id" element={<GastronomyContent />} />
            </Route>
            <Route path="/weather" element={<Weather />} ></Route>
            <Route path="/motorcycles" element={<Motorcycles />} >
                <Route path="/motorcycles/motorcyclesinitial" element={<MotorcyclesInitial />}></Route>
                <Route path="/motorcycles/:id" element={<MotorcyclesContent />} />
            </Route>
            <Route path="/aboutus" element={<AboutUs />} ></Route>
            <Route path="*" element={<NotFound />} ></Route>
        </Routes>
    </main>
)

export default Content;

