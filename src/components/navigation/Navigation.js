import React from 'react';
import './Navigation.css';

function Navigation({handleRoute, cleanUrl}) {
    return (
        <nav className='nav-section'>
          <p onClick={()=>{handleRoute('signin'); cleanUrl()}}>Sign Out</p>  
        </nav>
    )
}

export default Navigation;