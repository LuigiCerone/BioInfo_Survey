package com.univaq.disim.bioinfo.repository;

import com.univaq.disim.bioinfo.model.Questionnaire;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface QuestionnaireRepository extends MongoRepository<Questionnaire, String > {

    @Query("{'a1.dbCodeNumber': {$regex : ?0, $options: 'i'} }")
    Questionnaire findByDbCodeNumber(String DbCodeNumber);

    Questionnaire findOneByOwnerUsername(String ownerUsername);
}
