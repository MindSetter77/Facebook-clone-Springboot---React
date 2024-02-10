package com.example.zpoprojj.service;

import com.example.zpoprojj.model.Comment;

import java.util.List;


public interface CommentService {
    public Comment saveComment(Comment comment);
    public List<Comment> getCommentsById(int postId);
    public Comment addComment(Comment comment);
}
