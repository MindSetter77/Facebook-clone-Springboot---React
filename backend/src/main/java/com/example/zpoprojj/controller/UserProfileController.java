package com.example.zpoprojj.controller;

import com.example.zpoprojj.model.Posty;
import com.example.zpoprojj.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin
public class UserProfileController {

    @Autowired
    private PostService postService;

    @GetMapping("/{userID}")
    public ResponseEntity<List<Posty>> getUserPosts(@PathVariable Long userID) {
        List<Posty> posts = postService.findPostsByUserID(userID);
        if (posts.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(posts);
    }
}

