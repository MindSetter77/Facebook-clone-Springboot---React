import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./UserProfile.css"
import {  Comment2 } from "./Comment2";

function UserProfile() {
    const { userId } = useParams(); // Zmodyfikuj to, aby pobrać userID
    
    const [posts, setPosts] = useState([]);

    
    const [allUsers, setAllUsers] = useState([]);
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Upewnij się, że userID jest poprawnie wstawione w URL
                const response = await fetch(`http://localhost:8080/api/profile/${userId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setPosts(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchPosts();
    }, [userId]); // Dodaj userID jako zależność do useEffect

    useEffect(() => {
        fetch("http://localhost:8080/user/getAllUser")
          .then(response => response.json())
          .then(user => setAllUsers(user))
          .catch(error => console.error("Error fetching posts:", error));
      }, []);

      useEffect(() => {
        fetch("http://localhost:8080/user/getAllUser")
          .then(response => response.json())
          .then(data => {
            const logUser = data.find(usr => usr.user_id === userId);
            setUser(logUser);
          })
          .catch(error => console.error("Error fetching user...", error));
      }, [userId]); // Uruchamiamy efekt po zmianie user_id


      function getPostName(userID) {  
        const foundUser = allUsers.find(usr => Number(usr.user_id) === userID);
        return foundUser ? foundUser.firstName + " " + foundUser.lastName : "Admin";
      }
    
      

    return (
        <div className='ground-zero'>
            <h1>Posty użytkownika: </h1>
            <ul>
            {posts.slice().reverse().map(post => ( // Odwracamy kolejność postów przed mapowaniem
            <div key={post.id} className="post">
                <div className="up">
                    <p>{getPostName(post.userID)}</p>
                    <p className="dot">•</p>
                    <p>{post.date}</p>
                </div>
                <div className="text">{post.text}</div>
                <div className="line-comments"></div>
                <Comment2 postId={post.id} userId={userId} post={post} user={user}/>
            </div>
        ))}
            </ul>
        </div>
    );
}

export default UserProfile;
