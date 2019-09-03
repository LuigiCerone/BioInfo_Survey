package com.univaq.disim.bioinfo.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.QueryBuilder;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sun.rmi.runtime.Log;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class QuestionnaireServiceImpl implements QuestionnaireService {

    @Autowired
    QuestionnaireRepository questionnaireRepository;

    private final MongoTemplate mongoTemplate;

    @Autowired
    public QuestionnaireServiceImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Questionnaire findOneByCodeNumber(String codeNumber) {
        return questionnaireRepository.findByDbCodeNumber(codeNumber);
    }

    @Override
    public Questionnaire findOneByUsername(String ownerUsername) {
        return questionnaireRepository.findOneByOwnerUsername(ownerUsername);
    }

    @Override
    public Questionnaire insert(Questionnaire q) {
        return questionnaireRepository.insert(q);
    }

    @Override
    public Questionnaire update(Questionnaire q) {
        return questionnaireRepository.insert(q);
    }

    @Override
    public List<Questionnaire> findAll() {
        return questionnaireRepository.findAll();
    }

    @Override
    public List<Questionnaire> runQuery(JsonNode jsonQuery) {
//        Query query = new Query(jsonQuery.toString());

        Query query = new Query();
        ArrayList<Criteria> list = new ArrayList<>();

        JsonNode rules = jsonQuery.get("rules");
        for ( JsonNode node : rules) {

            switch (node.get("operator").asText()){
                case "=": {
                    list.add(Criteria.where(node.get("field").asText()).is(node.get("value").asText()));
                    break;
                }
                case ">=": {
                    list.add(Criteria.where(node.get("field").asText()).gte(node.get("value").asText()));
                    break;
                }
                case "<=": {
                    list.add(Criteria.where(node.get("field").asText()).lte(node.get("value").asText()));
                    break;
                }
                default: {
                    System.out.println("Could not translate");
                }
            }
        }

        if (list.size() == 1){
            query.addCriteria(list.get(0));
        } else {
//            query.addCriteria(list.get(0).andOperator(Criteria.(list.subList(1,list.size()).toArray())));
        }

        return mongoTemplate.find(query, Questionnaire.class);
    }
}
