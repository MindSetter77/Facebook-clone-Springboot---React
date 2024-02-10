package com.example.zpoprojj.service;

import com.example.zpoprojj.model.Comment;
import com.example.zpoprojj.repository.CommentRepo;
import com.example.zpoprojj.repository.PostRepo;
import com.example.zpoprojj.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentRepo commentRepo;

    @Autowired
    private PostRepo postRepo; // Repozytorium dla postów

    @Autowired
    private UserRepo userRepo; // Repozytorium dla użytkowników


    @Override
    public Comment saveComment(Comment comment) {
        return null;
    }

    @Override
    public List<Comment> getCommentsById(int postID) {
        return commentRepo.findByPostId(postID);
    }

    @Override
    public Comment addComment(Comment comment) {
        // Załaduj post i użytkownika z bazy danych na podstawie ich ID
        comment.setPost(postRepo.findById(comment.getPost().getId()).orElse(null));
        int id = comment.getUser().getUser_id();

        comment.setUser(userRepo.findById(id).orElse(null));

        // Zapisanie komentarza do bazy danych
        commentRepo.save(comment);
        return comment;
    }
}
