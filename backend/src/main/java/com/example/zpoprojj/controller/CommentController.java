package com.example.zpoprojj.controller;

import com.example.zpoprojj.model.Comment;
import com.example.zpoprojj.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.metadata.CallParameterMetaData;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping("/post/{postId}")
    public List<Comment> getCommentsByPostId(@PathVariable int postId) {
        return commentService.getCommentsById(postId);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment addComment(@RequestBody Comment comment) {
        return commentService.addComment(comment);
    }
}
