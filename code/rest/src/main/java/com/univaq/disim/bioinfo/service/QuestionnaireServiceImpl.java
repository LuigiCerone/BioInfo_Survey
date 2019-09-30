package com.univaq.disim.bioinfo.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

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
                    if (node.get("serverType") != null && node.get("serverType").asText().equals("boolean")){
                        list.add(Criteria.where(node.get("field").asText()).is(node.get("value").asBoolean()));
                    } else {
                        list.add(Criteria.where(node.get("field").asText()).is(node.get("value").asText()));
                    }
                    break;
                }
                case ">=": {
                    if (node.get("serverType") != null && node.get("serverType").asText().equals("date")){
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
                    if (node.get("serverType").asText().equals("boolean")){
                        list.add(Criteria.where(node.get("field").asText()).ne(node.get("value").asBoolean()));
                    } else {
                        list.add(Criteria.where(node.get("field").asText()).ne(node.get("value").asText()));
                    }
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

        String otherConditionType = jsonQuery.get("otherConditionType").asText();

        if (otherConditionType.equals("normal")) {
            // Do nothing.
        } else if (otherConditionType.equals("min")) {
            query.with(new Sort(Sort.Direction.ASC, jsonQuery.get("otherConditionField").asText()));
            query.limit(1);
        } else if (otherConditionType.equals("max")) {
            query.with(new Sort(Sort.Direction.DESC, jsonQuery.get("otherConditionField").asText()));
            query.limit(1);
        } else if (otherConditionType.equals("count")) {
            // Nothing.
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

//
//    Query query = new Query();
//query.with(new Sort(Sort.Direction.DESC, "idField"));
//        query.limit(1);