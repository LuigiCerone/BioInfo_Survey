package com.univaq.disim.bioinfo.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.configuration.JwtProvider;
import com.univaq.disim.bioinfo.configuration.JwtResponse;
import com.univaq.disim.bioinfo.configuration.LoginForm;
import com.univaq.disim.bioinfo.configuration.SignUpForm;
import com.univaq.disim.bioinfo.model.User;
import com.univaq.disim.bioinfo.repository.UserRepository;
import com.univaq.disim.bioinfo.service.AppUserDetailsServiceImpl;
import com.univaq.disim.bioinfo.service.interfaces.AppUserDetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private static Logger LOGGER = LoggerFactory.getLogger(AuthController.class);


    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    AppUserDetailsService appUserDetailsService;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) throws BusinessLayerException {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        return ResponseEntity.ok(new JwtResponse(jwt, appUserDetailsService.findOneByUsername(loginRequest.getUsername())));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody JsonNode json) throws BusinessLayerException {
        LOGGER.debug(json.asText());
//        if(userRepository.existsByUsername(signUpRequest.getUsername())) {
//            return new ResponseEntity<String>("Fail -> Username is already taken!",
//                    HttpStatus.BAD_REQUEST);
//        }

//        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
//            return new ResponseEntity<String>("Fail -> Email is already in use!",
//                    HttpStatus.BAD_REQUEST);
//        }

        User user = appUserDetailsService.generateAndSaveUser(json.get("role").textValue());

        return new ResponseEntity<>(user, HttpStatus.CREATED);

    }
}