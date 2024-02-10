import './App.css'
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import {Navbar} from './components/Navbar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Footer from './components/Footer'
import UserProfile from './components/pages/UserProfile';


function App() {

  const [loggedUser, setLoggedUser] = useState('');

  const handleLogin = async (asd) => {
    try {
      const response = await fetch('http://localhost:8080/user/getAllUser', { method: 'GET' });
      const users = await response.json();
      console.log(users)
      
      const user = users.find(
        (user) => user.userName === asd.username && user.password === asd.password
        );

        console.log(user.userName, user.password)
        console.log(asd.username, asd.password)
        

      if (user) {
        // Zalogowano pomyślnie, ustaw zalogowanego użytkownika i przekieruj na stronę profilu
        console.log("logged as" +user.user_id)
        setLoggedUser(user.user_id)

      } else {
        // Błąd logowania
        console.log('Nieprawidłowe dane logowania');
      }
    } catch (error) {
      console.error('Błąd podczas komunikacji z serwerem:', error);
    }
  };

  return (
    
    <div className='App'>
        <script>
          var global = window;
        </script>
        
        
        <Routes>
          {loggedUser? (
              <Route path='/' element={<Home user_id={loggedUser}/>} />
              
              ) : (
            <Route path='/' element={<Login onLogin={handleLogin}/>}  ></Route>
            
          )}
          <Route path="/profile/:userId" element={<UserProfile user_id={loggedUser} />} />
          
        </Routes>
        <Footer />
      
    </div>
  )
}

export default App
