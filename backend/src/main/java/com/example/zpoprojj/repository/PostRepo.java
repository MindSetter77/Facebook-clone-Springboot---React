package com.example.zpoprojj.repository;

import com.example.zpoprojj.model.Posty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepo extends JpaRepository<Posty, Integer> {
    List<Posty> findByUserID(Long userID);
}
