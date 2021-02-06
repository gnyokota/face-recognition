import React, {useState} from 'react';
import './SignIn.css';

function SignIn({handleRoute, loadUser}) {

    const[userEmail, setUserEmail] = useState('');
    const[userPass, setUserPass] = useState('');
    const [errorMe, setErrorMe] = useState('');

    const handleEmailChange = (event) =>{
        setUserEmail(event.target.value); 
    }

    const handlePassChnage = (event) =>{
        setUserPass(event.target.value); 
    }

    const handleSubmitSignin = (event) =>{
        event.preventDefault();
        //fetch by default does a get request
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: userEmail, 
                    password: userPass
                })
        }).then(response => response.json())
        .then(user => {
            //Did we receive a user with an Id property?
            if (user.id){
                loadUser(user);
                handleRoute('home');
            }else{
                setErrorMe('Wrong email and/or password');
            }
        })
      
    };

    return (
    <form 
    className="signin-section"
    onSubmit={handleSubmitSignin}
    >  
        <div className="form-section">
            <legend className="legend-section">Sign In</legend>
            <label className="label-section" htmlFor="email-address">Email</label>
            <input className="input-signin-section" type="email" value={userEmail} onChange={handleEmailChange}/>
            <label className="label-section" htmlFor="password">Password</label>
            <input className="input-signin-section" type="password" value={userPass} onChange={handlePassChnage}/>
            <button 
            className="submit-btn" 
            type="submit">
                Sign in</button>
            <div className='error-msg'>{errorMe}</div>
            <div className='recover-section'>
            <p 
            onClick={()=> handleRoute('register')} 
            className="recover-items">Register</p>
            </div>
        </div>
    </form>  
    ); 
}

export default SignIn; 
