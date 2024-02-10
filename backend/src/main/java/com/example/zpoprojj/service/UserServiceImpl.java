package com.example.zpoprojj.service;

import com.example.zpoprojj.model.Posty;
import com.example.zpoprojj.model.User;
import com.example.zpoprojj.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;


    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
