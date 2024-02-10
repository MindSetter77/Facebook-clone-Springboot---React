package com.example.zpoprojj.controller;

import com.example.zpoprojj.model.User;
import com.example.zpoprojj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getAllUser")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
