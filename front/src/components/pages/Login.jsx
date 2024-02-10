import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export const UserContext = React.createContext();

function Login({onLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  
  const handleLoginClick = () => {
    if(!username || !password){
      alert("Wypalnij pola");
      return
    }
    onLogin({username, password})
  }

  return (
    <div className='ground'>
      <div className='Login-form'>
        <div className='login-header'>Zaloguj się na konto</div>

        <p className='login-string'>Login</p>
        <textarea className='form' value={username} onChange={handleUsernameChange}></textarea>
        <p className='login-string'>Password</p>
        <textarea className='form' value={password} onChange={handlePasswordChange} type='password'></textarea>
        <div className='login-btn' onClick={handleLoginClick} >
          Login
        </div>
      </div>
    </div>
  );
}

export default Login;
