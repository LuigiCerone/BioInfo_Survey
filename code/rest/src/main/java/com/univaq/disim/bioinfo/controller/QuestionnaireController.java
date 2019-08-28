package com.univaq.disim.bioinfo.controller;


import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.configuration.JwtProvider;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.*;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.*;
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
    private SectionB2Service sectionB2Service;

    @Autowired
    private SectionB3Service sectionB3Service;

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

    // ==================================================================================== SECTION
    // B2
    @PostMapping("/user/{username}/b2")
    public ResponseEntity insertB2(HttpServletRequest request,
                                   @RequestBody B2 b2,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        B2 b2Inserted = sectionB2Service.insert(username, b2);
        return new ResponseEntity<>(b2Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/b2")
    public ResponseEntity<B2> getB2(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        B2 b2 = sectionB2Service.get(username);
        return new ResponseEntity<B2>(b2, HttpStatus.OK);
    }

    // ==================================================================================== SECTION
    // B3
    @PostMapping("/user/{username}/b3")
    public ResponseEntity upsertB3(HttpServletRequest request,
                                   @RequestBody B3 b3,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        B3 b3Inserted = sectionB3Service.insert(username, b3);
        return new ResponseEntity<>(b3Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/b2")
    public ResponseEntity<B3> getB3(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        B3 b3 = sectionB3Service.get(username);
        return new ResponseEntity<B3>(b3, HttpStatus.OK);
    }
}
