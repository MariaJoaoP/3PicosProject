import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className='Footer bd-footer py-4 py-md-5 mt-5'>
        <div>Copyright © 2022 3PICOS | All Rights Reserved</div>
        <a href='mailto:club3picos@gmail.com' aria-label='Email' aria-hidden='false' title='Email'> 
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='orange' className='bi bi-envelope' viewBox='0 0 16 16'>
                <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'/>
            </svg>
        </a> <a href='https://www.youtube.com/channel/UCU2zu1FVkTvzhc4npzABAeg' target='_blank' rel="noreferrer" aria-label='Link to Youtube' aria-hidden='false' title='Youtube'>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='orange' viewBox='0 0 576 512'>
                <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'></path>
            </svg>
        </a> 
    </footer>
)

export default Footer;