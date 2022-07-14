import React from 'react';
import motorcyclesData from '../data/motorcyclesData';
import { useParams } from 'react-router-dom';
import './MotorcyclesContent.css';

const MotorcyclesContent = () => {

    const motoChoice = useParams();
    const motoInfo = motorcyclesData.filter (moto => moto.model == motoChoice.id);

    return (
        <>
            <div className='MotorcyclesContent card my-5'>
                <img className='img-fluid card-img-top' src={'/images/' + motoInfo[0].image}  alt='{motoInfo[0].model}'/>
                <h3 className='h3 py-3'>{motoInfo[0].brand}</h3>
                <h3 className='h3'>{motoInfo[0].model}</h3>
                <div className="card-body">
                    <p>{motoInfo[0].info}</p>
                </div>
            </div>
        </>
    )
}

export default MotorcyclesContent;