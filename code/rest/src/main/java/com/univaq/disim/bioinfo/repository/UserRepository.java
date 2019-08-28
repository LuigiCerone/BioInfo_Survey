package com.univaq.disim.bioinfo.repository;

import com.univaq.disim.bioinfo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String > {
    User findByUsername(String username);
}
