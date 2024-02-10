import React, { useEffect, useState } from "react";
import "./Home.css";
import { Navbar } from "../Navbar";
import { Comments } from "./Comments";

function Home({ user_id }) {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  // Funkcja do ładowania postów
  const loadPosts = () => {
    fetch("http://localhost:8080/posty/getAll")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Error fetching posts:", error));
  };

  useEffect(() => {
    loadPosts();
  }, []);

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
        const logUser = data.find(usr => usr.user_id === user_id);
        setUser(logUser);
      })
      .catch(error => console.error("Error fetching user...", error));
  }, [user_id]);

  function getPostName(userID) {
    const foundUser = allUsers.find(usr => Number(usr.user_id) === userID);
    return foundUser ? foundUser.firstName + " " + foundUser.lastName : "Admin";
  }

  const handleClick = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const formattedDate = `${day}.${month}`;
    const post = { date: formattedDate, userID: user_id, text: text };

    fetch('http://localhost:8080/posty/add', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    })
    .then(() => {
      console.log("New post Added!");
      setText('');
      loadPosts(); // Ponowne załadowanie postów
    });
  }

  return (
    <div>
      <Navbar user={user} />
      <div className="ground">
        <div className="new-post">
          <div className="header">Podziel się czymś ciekawym ze światem!</div>
          <textarea className="text-area" value={text} onChange={(e) => setText(e.target.value)}></textarea>
          <div className="btn-container">
            <div className="send-button" onClick={handleClick}>Opublikuj</div>
          </div>
        </div>
        {posts.slice().reverse().map(post => (
          <div key={post.id} className="post">
            <div className="up">
              <p>{getPostName(post.userID)}</p>
              <p className="dot">•</p>
              <p>{post.date}</p>
            </div>
            <div className="text">{post.text}</div>
            <div className="line-comments"></div>
            <Comments postId={post.id} userId={user.user_id} post={post} user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
