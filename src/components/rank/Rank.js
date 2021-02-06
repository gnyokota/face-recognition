import React from 'react'
import './Rank.css';

function Rank({user}) {
    return (
        <div className='rank-section'>
            <h5>{user.name}
            {user.entries>1 ? 
            ', your current mumber of searches is...'
        : ', your current mumber of search is..'}</h5>
            <h3>#{user.entries}</h3>
        </div>
    )
}

export default Rank;
