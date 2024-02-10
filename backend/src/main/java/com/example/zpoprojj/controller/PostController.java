package com.example.zpoprojj.controller;

import com.example.zpoprojj.model.Posty;
import com.example.zpoprojj.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posty")
public class PostController {

    @Autowired
    private PostService postService;


    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/add")
    public String add(@RequestBody Posty post) {
        postService.savePosty(post);
        return "New post added";
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getAll")
    public List<Posty> getAllPosts() {
        return postService.getAllPosts();
    }
}
