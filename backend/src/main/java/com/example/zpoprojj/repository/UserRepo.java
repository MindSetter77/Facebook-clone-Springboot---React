package com.example.zpoprojj.repository;

import com.example.zpoprojj.model.Posty;
import com.example.zpoprojj.model.User;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
}

