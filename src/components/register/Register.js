import React, {useState} from 'react';

function Register({handleRoute, loadUser}) {

    const [nameReg, setNameReg] = useState('');
    const [emailReg, setEmailReg] = useState(''); 
    const [passReg, setPassReg] = useState(''); 


    const handleNameChange = (event) =>{
        setNameReg(event.target.value);
    }
    
    const handleEmailChange = (event) =>{
        setEmailReg(event.target.value);
    }
    const handlePassChange = (event) =>{
        setPassReg(event.target.value);
    }

    const handleSubmitReg = () =>{
        //fetch by default does a get request
        fetch('https://facerec-back-2021.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: nameReg, 
                    email: emailReg, 
                    password: passReg 
                })
        }).then(response => response.json())
        .then(user => {

            // where we should check user.id not only user
            //because any type os response, even an error will set user=true
            if (user.id){
                loadUser(user);
                handleRoute('home');
            }
        }); 
    };

    return (
        <div className="signin-section" style={{height:'350px'}}>
            <div className="form-section">
            <legend className="legend-section">Register</legend>
            <label className="label-section" htmlFor="name">Name</label>
            <input 
            className="input-signin-section" 
            type="text" 
            onChange={handleNameChange}
            />
            <label className="label-section" htmlFor="email-address">Email</label>
            <input 
            className="input-signin-section" 
            type="email" 
            onChange={handleEmailChange}
            />
            <label className="label-section" htmlFor="password">Password</label>
            <input 
            className="input-signin-section" 
            type="password" 
            onChange={handlePassChange}
            />
            <button
            onClick={handleSubmitReg}
             className="submit-btn" 
             type="submit"
                >Register</button>
            <p onClick={()=> handleRoute('signin')} className="recover-items">Sign out</p>
        </div>
        </div>
    )
}

export default Register
