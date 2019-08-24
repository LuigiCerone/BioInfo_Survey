package com.univaq.disim.bioinfo.controller;


import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.configuration.JwtProvider;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.A1;
import com.univaq.disim.bioinfo.model.section.A2;
import com.univaq.disim.bioinfo.model.section.B1;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.QuestionnaireService;
import com.univaq.disim.bioinfo.service.interfaces.SectionA1Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionA2Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionB1Service;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/questionnaire")
public class QuestionnaireController<QuestionnaireServiceImpl> {
    private static Logger LOGGER = LoggerFactory.getLogger(QuestionnaireController.class);

    @Autowired
    private QuestionnaireService questionnaireService;

    @Autowired
    private SectionA1Service sectionA1Service;

    @Autowired
    private SectionA2Service sectionA2Service;

    @Autowired
    private SectionB1Service sectionB1Service;

    @Autowired
    private JwtProvider jwtProvider;

    @GetMapping("/{codeNumber}")
    public ResponseEntity<Questionnaire> getQuestionnaire(HttpServletRequest request, @PathVariable(value="codeNumber") String codeNumber){
        Questionnaire q = questionnaireService.findOneByCodeNumber(codeNumber);
        return new ResponseEntity<Questionnaire>(q, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAllQuestionnaires(HttpServletRequest request){
        List<Questionnaire> q = questionnaireService.findAll();
        return new ResponseEntity<>(q, HttpStatus.OK);
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<Questionnaire> getQuestionnaireForUser(HttpServletRequest request, @PathVariable(value="username") String username){
        Questionnaire q = questionnaireService.findOneByUsername(username);
        return new ResponseEntity<Questionnaire>(q, HttpStatus.OK);
    }

    // ==================================================================================== SECTIONS
    // A1
    @PostMapping("/user/{username}/a1")
    public ResponseEntity insertA1(HttpServletRequest request,
                                   @RequestBody A1 a1,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        A1 a1Inserted = sectionA1Service.insert(username, a1);
        return new ResponseEntity<>(a1Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/a1")
    public ResponseEntity<A1> getA1(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        A1 a1 = sectionA1Service.get(username);
        return new ResponseEntity<A1>(a1, HttpStatus.OK);

    }

    // ==================================================================================== SECTIONS
    // A2
    @PostMapping("/user/{username}/a2")
    public ResponseEntity insertA2(HttpServletRequest request,
                                   @RequestBody A2 a2,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        A2 a2Inserted = sectionA2Service.insert(username, a2);
        return new ResponseEntity<>(a2Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/a2")
    public ResponseEntity<A2> getA2(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        A2 a2 = sectionA2Service.get(username);
        return new ResponseEntity<A2>(a2, HttpStatus.OK);

    }

    // ==================================================================================== SECTIONS
    // B1
    @PostMapping("/user/{username}/b1")
    public ResponseEntity insertB1(HttpServletRequest request,
                                   @RequestBody B1 b1,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        B1 b1Inserted = sectionB1Service.insert(username, b1);
        return new ResponseEntity<>(b1Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/b1")
    public ResponseEntity<B1> getB1(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        B1 b1 = sectionB1Service.get(username);
        return new ResponseEntity<B1>(b1, HttpStatus.OK);

    }
}
