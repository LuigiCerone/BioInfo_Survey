package com.univaq.disim.bioinfo.controller;


import com.fasterxml.jackson.databind.JsonNode;
import com.univaq.disim.bioinfo.configuration.JwtProvider;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.service.interfaces.QuestionnaireService;
import org.bson.BsonArray;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/query")
public class QueryController<QuestionnaireServiceImpl> {
    private static Logger LOGGER = LoggerFactory.getLogger(QueryController.class);

    @Autowired
    private QuestionnaireService questionnaireService;

    @Autowired
    private JwtProvider jwtProvider;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity runQuery(HttpServletRequest request,
                                   @RequestBody JsonNode jsonQuery){
        List<Questionnaire> result = questionnaireService.runQuery(jsonQuery);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}