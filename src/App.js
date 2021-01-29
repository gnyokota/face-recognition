import React, {useState, useEffect} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageInputForm from './components/form/ImageForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import {particlesProps} from './ParticlesProp';
import FaceRecognition from './components/face/FaceRecognition';
import Clarifai from 'clarifai';
import {apiKey} from './APIKey';

function App() {

  const [input, setInput] = useState('');
  const [url, setUrl] = useState('');
  const [box, setBox] = useState({
    top:'', 
    bottom:'',
    right:'', 
    left:''
  });

  const [allBox, setAllBox] = useState([]);

    useEffect(()=>{
      setAllBox(prev => [...prev, box]);
    }, [box]);

    const faceLocation = (data) => {
      for(let i=0; i<data.outputs[0].data.regions.length; i++){
        const locations = data.outputs[0].data.regions[i].region_info.bounding_box;
        const image = document.getElementById('input-img');
        const width = +(image.width); 
        const height = +(image.height);
        const topCord = locations.top_row * height; 
        const bottomCord = height - (locations.bottom_row * height); 
        const rightCord = width - (locations.right_col * width); 
        const leftCord = locations.left_col * width; 
        setBox({
          ...box, top:topCord, bottom:bottomCord, right:rightCord, left:leftCord
        });
    }}
     
    const handleChange = (event)=>{
     setInput(event.target.value);
    }

    const app = new Clarifai.App({
        apiKey: apiKey
    });

    const handleClick = () =>{
      setAllBox([]);
        setUrl(input);
        app.models.predict('d02b4508df58432fbb84e800597b8959',input)
        .then( response => faceLocation(response))
        .catch(err => console.log(err))
    }


  return (
    <div className="App">
      <Particles className='particles' params={particlesProps} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageInputForm handleClick={handleClick} handleChange={handleChange}/>
      <FaceRecognition url={url} allBox={allBox}/>
    </div>
  );
}

export default App; 
