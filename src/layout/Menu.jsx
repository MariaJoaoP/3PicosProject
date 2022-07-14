import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {

    return (
        <aside className='Menu py-3'>
            <nav> 
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <Link to={"/"} className='list-group-item list-group-item-action'><img className='rounded-circle' id='logo' src='/images/3PicosLogo.jpg'/></Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to={"/trips/tripsinitial"} className='list-group-item list-group-item-action'>Viagens</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to={"/gastronomy"} className='list-group-item list-group-item-action'>Gastronomia</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to={"/weather"} className='list-group-item list-group-item-action'>Verifica o Tempo</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to={"/motorcycles/motorcyclesinitial"} className='list-group-item list-group-item-action'>As Motas</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to={"/aboutus"} className='list-group-item list-group-item-action'>Sobre Nós</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu;
