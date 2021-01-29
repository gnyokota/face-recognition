import React from 'react'
import './FaceRecognition.css'

function FaceRecognition({url, allBox}) {
    let children = allBox.map((location, index)=>{
        return(
            <div className='bounding-box' key={index}
            style={{
                top: location.top,
                bottom:location.bottom, 
                right: location.right, 
                left: location.left
            }}></div>
        );
    });

    return (
        <div className='face-section'>
            {url? <img id='input-img' alt='face-img' src={url}/> : ''}
            {children}
        </div>
    )
}

export default FaceRecognition;
