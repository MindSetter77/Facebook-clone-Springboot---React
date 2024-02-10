package com.example.zpoprojj.service;

import com.example.zpoprojj.model.Posty;

import java.util.List;

public interface PostService{
    public Posty savePosty(Posty posty);
    public List<Posty> getAllPosts();
    List<Posty> findPostsByUserID(Long userID);
}
