package com.example.zpoprojj.service;

import com.example.zpoprojj.model.Posty;
import com.example.zpoprojj.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    private PostRepo postRepo;

    @Override
    public Posty savePosty(Posty posty) {
        return postRepo.save(posty);
    }

    @Override
    public List<Posty> getAllPosts() {
        return postRepo.findAll();
    }

    @Override
    public List<Posty> findPostsByUserID(Long userID) {
        return postRepo.findByUserID(userID); // Implementacja metody
    }
}
