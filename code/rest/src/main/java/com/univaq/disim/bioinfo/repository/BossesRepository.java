package com.univaq.disim.bioinfo.repository;

import com.univaq.disim.bioinfo.model.Bosses;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BossesRepository extends MongoRepository<Bosses, String > {
        Bosses findBy_id(ObjectId _id);
}
