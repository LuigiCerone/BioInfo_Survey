package com.univaq.disim.bioinfo.repository;

import com.univaq.disim.bioinfo.model.Bosses;
import com.univaq.disim.bioinfo.model.Questionnaire;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionnaireRepository extends MongoRepository<Questionnaire, String > {
        Questionnaire findBy_id(String id);
}
