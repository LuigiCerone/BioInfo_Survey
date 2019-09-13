package com.univaq.disim.bioinfo.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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
        String operator = jsonQuery.get("condition").asText();


        for ( JsonNode node : rules) {

            switch (node.get("operator").asText()){
                case "=": {
                    list.add(Criteria.where(node.get("field").asText()).is(node.get("value").asText()));
                    break;
                }
                case ">=": {
                    if (node.get("serverType").asText().equals("date")){
                        // Transform date as string into date obj.
                        Long millis = trasformDate(node);
                        list.add(Criteria.where(node.get("field").asText()).gte(millis));
                    } else {
                        list.add(Criteria.where(node.get("field").asText()).gte(node.get("value").asText()));
                    }
                    break;
                }
                case "<=": {
                    if (node.get("serverType").asText().equals("date")){
                        // Transform date as string into date obj.
                        Long millis = trasformDate(node);
                        list.add(Criteria.where(node.get("field").asText()).lte(millis));
                    } else {
                        list.add(Criteria.where(node.get("field").asText()).lte(node.get("value").asText()));
                    }
                    break;
                }
                case "!=": {
                    list.add(Criteria.where(node.get("field").asText()).ne(node.get("value").asText()));
                    break;
                }
                default: {
                    System.out.println("Could not translate");
                }
            }
        }

        if (list.size() > 0 ){
            Criteria c1 = list.get(0);
            if (operator.equals("and")){
                c1.andOperator(list.toArray(new Criteria[list.size()]));
            } else {
                c1.orOperator(list.toArray(new Criteria[list.size()]));
            }
            query.addCriteria(c1);
        }

        return mongoTemplate.find(query, Questionnaire.class);
    }

    private Long trasformDate(JsonNode node){
        Long millis = null;
        try {
            millis = new SimpleDateFormat("yyyy-MM-dd").parse(node.get("value").asText()).toInstant().toEpochMilli();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return millis;
    }
}
