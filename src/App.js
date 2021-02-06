import React, {useState, useEffect} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageInputForm from './components/form/ImageForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import {particlesProps} from './ParticlesProp';
import FaceRecognition from './components/face/FaceRecognition';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';

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
  const [route, setRoute] = useState('signin');
  const [user,setUser] = useState({
    id: '', 
    name: '', 
    email: '', 
    entries:0,
    joined: ''
  });

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

    
    const handleClick = () =>{
      setAllBox([]);
        fetch('http://localhost:3000/imageUrl', {
              method: 'post', 
              headers: {'Content-Type': 'application/json'}, 
              body: JSON.stringify({
                input: input,
              })
            })
            .then(response => response.json())
        .then( response => {
          if (response){
            fetch('http://localhost:3000/image', {
              method: 'put', 
              headers: {'Content-Type': 'application/json'}, 
              body: JSON.stringify({
                id: user.id,
              })
            })
            .then(res => res.json())
            .then(count => {
              setUser( {...user, entries: count})
            })
          }
          
        faceLocation(response)
        })
        .catch(err => console.log(err))
        setUrl(input);
    }

    const handleRoute = (route) =>{
      setRoute(route);
    }

    const cleanUrl = ()=>{
      setUrl('');
    }

    const loadUser = (data) =>{
      setUser({...user, 
        id: data.id, 
        name: data.name, 
        email: data.email, 
        entries: data.entries,
        joined: data.joined}); 
    }


  return (
    <div className="App">
      <Particles className='particles' params={particlesProps} />
      
      {route === 'home'?
      <div>
      <Navigation handleRoute={handleRoute} cleanUrl={cleanUrl}/>
      <Logo />
      <Rank user={user}/>
      <ImageInputForm handleClick={handleClick} handleChange={handleChange}/>
      <FaceRecognition url={url} allBox={allBox}/>
      </div>
      : (
      route === 'signin'?
        <SignIn handleRoute={handleRoute} loadUser={loadUser}/> 
        :
        <Register handleRoute={handleRoute} loadUser={loadUser}/>
      )
      }
      
    </div>
  );
}

export default App; 
