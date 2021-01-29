import React from 'react';
import './ImageForm.css';


function ImageInputForm({handleChange,handleClick}) {

    return (
        <div className='input-section'>
            <p className='input-text'>
               Below you can add the image.jpg URL and it will detect the face...
            </p>
            <div className='input-wrapper'>
        <input placeholder='Location' 
        className='input-field' 
        type='text' 
          onChange={handleChange} />
        <button 
        className='input-btn'
        onClick={handleClick}
        >Find Face</button>
      </div>
        </div>
    )
}

export default ImageInputForm;
