import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

function Logo() {
    return (
        <div className='logo-section'>
            <Tilt className='tilt-wrapper'>
            <div className='tilt'>
            <i className="fas fa-portrait"></i>
            </div>
            </Tilt>
        </div>
    )
}

export default Logo;
