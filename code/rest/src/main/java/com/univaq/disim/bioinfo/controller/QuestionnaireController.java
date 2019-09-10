package com.univaq.disim.bioinfo.controller;


import com.fasterxml.jackson.databind.JsonNode;
import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.configuration.JwtProvider;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.*;
import com.univaq.disim.bioinfo.service.interfaces.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
    private SectionEService sectionEService;

    @Autowired
    private SectionC1Service sectionC1Service;

    @Autowired
    private SectionC2Service sectionC2Service;

    @Autowired
    private SectionC3Service sectionC3Service;

    @Autowired
    private SectionDService sectionDService;

    @Autowired
    private JwtProvider jwtProvider;


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

    @GetMapping("/user/{username}/b3")
    public ResponseEntity<B3> getB3(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        B3 b3 = sectionB3Service.get(username);
        return new ResponseEntity<B3>(b3, HttpStatus.OK);
    }

    // ==================================================================================== SECTION
    // Be
    @PostMapping("/user/{username}/be")
    public ResponseEntity upsertBe(HttpServletRequest request,
                                   @RequestBody E be,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        E beInserted = sectionEService.insert(username, be, 'B');
        return new ResponseEntity<>(beInserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/be")
    public ResponseEntity<E> getBe(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        E be = sectionEService.get(username, 'B');
        return new ResponseEntity<E>(be, HttpStatus.OK);
    }

    // ==================================================================================== SECTION
    // C1
    @PostMapping("/user/{username}/c1")
    public ResponseEntity upsertC1(HttpServletRequest request,
                                   @RequestBody C1 c1,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        C1 c1Inserted = sectionC1Service.insert(username, c1);
        return new ResponseEntity<>(c1Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/c1")
    public ResponseEntity<C1> getC1(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        C1 c1 = sectionC1Service.get(username);
        return new ResponseEntity<C1>(c1, HttpStatus.OK);
    }

    // ==================================================================================== SECTION
    // C2
    @PostMapping("/user/{username}/c2")
    public ResponseEntity upsertC2(HttpServletRequest request,
                                   @RequestBody C2 c2,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        C2 c2Inserted = sectionC2Service.insert(username, c2);
        return new ResponseEntity<>(c2Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/c2")
    public ResponseEntity<C2> getC2(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        C2 c2 = sectionC2Service.get(username);
        return new ResponseEntity<C2>(c2, HttpStatus.OK);
    }

    // ==================================================================================== SECTION
    // C3
    @PostMapping("/user/{username}/c3")
    public ResponseEntity upsertC3(HttpServletRequest request,
                                   @RequestBody C3 c3,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        C3 c3Inserted = sectionC3Service.insert(username, c3);
        return new ResponseEntity<>(c3Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/c3")
    public ResponseEntity<C3> getC3(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        C3 c3 = sectionC3Service.get(username);
        return new ResponseEntity<C3>(c3, HttpStatus.OK);
    }

    // ==================================================================================== SECTION
    // Ce
    @PostMapping("/user/{username}/ce")
    public ResponseEntity upsertCe(HttpServletRequest request,
                                   @RequestBody E ce,
                                   @PathVariable(value="username") String username,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        E ceInserted = sectionEService.insert(username, ce, 'C');
        return new ResponseEntity<>(ceInserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/ce")
    public ResponseEntity<E> getCe(HttpServletRequest request, @PathVariable(value="username") String username) throws BusinessLayerException {
        E ce = sectionEService.get(username, 'C');
        return new ResponseEntity<E>(ce, HttpStatus.OK);
    }

    // ==================================================================================== SECTION
    // D
    @PostMapping("/user/{username}/d/{type}")
    public ResponseEntity upsertD(HttpServletRequest request,
                                   @RequestBody D d,
                                   @PathVariable(value="username") String username,
                                   @PathVariable(value="type") int type,
                                   @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        String token_username = this.jwtProvider.getUserNameFromJwtToken(token.substring(7));
        D d3Inserted = sectionDService.insert(username, d, type);
        return new ResponseEntity<>(d3Inserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/d/{type}")
    public ResponseEntity<D> getD(HttpServletRequest request,
                                  @PathVariable(value="username") String username,
                                  @PathVariable(value="type") int type
                            ) throws BusinessLayerException {
        D d = sectionDService.get(username, type);
        return new ResponseEntity<D>(d, HttpStatus.OK);
    }

    // ==================================================================================== SECTION
    // D number
    @PostMapping("/user/{username}/d")
    public ResponseEntity upsertNumberD(HttpServletRequest request,
                                  @RequestBody JsonNode json,
                                  @PathVariable(value="username") String username,
                                  @RequestHeader (name="Authorization") String token) throws BusinessLayerException {
        // Decode token and get the username contained. There is also the word "Bearer" that we need to escape.
        int numberInserted = sectionDService.insertNumber(username, json.get("number").asInt());
        return new ResponseEntity<>(numberInserted, HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}/d")
    public ResponseEntity<Integer> getNumber(HttpServletRequest request,
                                  @PathVariable(value="username") String username) throws BusinessLayerException {
        int n = sectionDService.getNumber(username);
        return new ResponseEntity<Integer>(n, HttpStatus.OK);
    }
}
