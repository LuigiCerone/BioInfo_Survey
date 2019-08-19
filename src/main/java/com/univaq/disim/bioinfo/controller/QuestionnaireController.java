package com.univaq.disim.bioinfo.controller;


import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.A1;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.QuestionnaireService;
import com.univaq.disim.bioinfo.service.interfaces.SectionA1Service;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("questionnaire")
public class QuestionnaireController<QuestionnaireServiceImpl> {
    private static Logger LOGGER = LoggerFactory.getLogger(QuestionnaireController.class);

    @Autowired
    private QuestionnaireService questionnaireService;

    @Autowired
    private SectionA1Service sectionA1Service;


    @GetMapping("/{codeNumber}")
    public ResponseEntity<Questionnaire> getQuestionnaire(HttpServletRequest request, @PathVariable(value="codeNumber") String codeNumber){
        Questionnaire q = questionnaireService.findOneByCodeNumber(codeNumber);
        return new ResponseEntity<Questionnaire>(q, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity getAllQuestionnaires(HttpServletRequest request){
        List<Questionnaire> q = questionnaireService.findAll();
        return new ResponseEntity<>(q, HttpStatus.OK);
    }

    // ==================================================================================== SECTIONS
    // A1
    @PostMapping("/{codeNumber}/a1")
    public ResponseEntity insertA1(HttpServletRequest request, @RequestBody A1 a1, @PathVariable(value="codeNumber") String codeNumber) throws BusinessLayerException {
        A1 a1Inserted = sectionA1Service.insert(codeNumber, a1);
        return new ResponseEntity<>(a1Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/{codeNumber}/a1")
    public ResponseEntity getA1(HttpServletRequest request, @PathVariable(value="codeNumber") String codeNumber) throws BusinessLayerException {
        A1 a1 = sectionA1Service.get(codeNumber);
        return new ResponseEntity<>(a1, HttpStatus.OK);

    }
//
//    @PatchMapping("/{dbCodeNumber}/a1")
//    public Response updateA1(HttpServletRequest request, @RequestBody A1 a1, @PathVariable(value="dbCodeNumber") String dbCodeNumber){
//        A1 a1Obj = a1Service.update(dbCodeNumber, a1);
//        Response<A1> response = new Response<>(HttpStatus.OK, request);
//        response.setData(a1Obj);
//        return response;
//    }
//
//    @DeleteMapping("/{dbCodeNumber}/a1")
//    public Response deleteA1(HttpServletRequest request, @PathVariable(value="dbCodeNumber") String dbCodeNumber){
//        a1Service.delete(dbCodeNumber);
//        return new Response<>(HttpStatus.OK, request);
//    }
}
