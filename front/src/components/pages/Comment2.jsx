import React, { useEffect, useState } from "react";
import "./Comments.css"


export const Comment2 = ({postId, userId, post, user}) => {

    const [comments, setComment] = useState([]);
    const [newComment, setNewComment] = useState([]);
    
  
    useEffect(() => {
      
      fetch(`http://localhost:8080/api/comments/post/${postId}`)
        .then(response => response.json())
        .then(data => setComment(data))
        .catch(error => console.error('Error:', error));
    }, [post.id]);

    

    return (
        <div className="groundy">
          {comments.slice().reverse().map(comment => (
            <div key={comment.id} className="comment">
              <p className="single-comment" >{comment.user.firstName +" "+comment.user.lastName}: {comment.content}</p>
              <div className="linee"></div>
            </div>
          ))}
          
        </div>
      );
}