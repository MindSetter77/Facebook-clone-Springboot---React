import React, { useEffect, useState } from "react";
import "./Comments.css";

export const Comments = ({ postId, userId, post, user }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    // Funkcja do ładowania komentarzy
    const loadComments = () => {
        fetch(`http://localhost:8080/api/comments/post/${postId}`)
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error('Error:', error));
    };

    useEffect(() => {
        loadComments();
    }, [postId]);

    const handleAddComment = () => {
        const commentData = {
            post: post,
            user: user,
            content: newComment
        };

        fetch('http://localhost:8080/api/comments/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(commentData)
        })
        .then(response => {
            if (response.ok) {
                setNewComment(""); // Resetowanie pola wprowadzania
                loadComments(); // Ponowne ładowanie komentarzy
            } else {
                throw new Error('Failed to add comment');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="groundy">
            {comments.slice().reverse().map(comment => (
                <div key={comment.id} className="comment">
                    <p className="single-comment" >{comment.user.firstName +" "+comment.user.lastName}: {comment.content}</p>
                    <div className="linee"></div>
                </div>
            ))}
            <textarea className="comment-area" value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
            <div className="comment-button-container">
                <div className="comment-button" onClick={handleAddComment}>Dodaj komentarz</div>
            </div>
        </div>
    );
};
