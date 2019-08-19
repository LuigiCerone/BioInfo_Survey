package com.univaq.disim.bioinfo.controller;

import com.univaq.disim.bioinfo.configuration.JwtProvider;
import com.univaq.disim.bioinfo.configuration.JwtResponse;
import com.univaq.disim.bioinfo.configuration.LoginForm;
import com.univaq.disim.bioinfo.configuration.SignUpForm;
import com.univaq.disim.bioinfo.model.User;
import com.univaq.disim.bioinfo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        return ResponseEntity.ok(new JwtResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
//        if(userRepository.existsByUsername(signUpRequest.getUsername())) {
//            return new ResponseEntity<String>("Fail -> Username is already taken!",
//                    HttpStatus.BAD_REQUEST);
//        }

//        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
//            return new ResponseEntity<String>("Fail -> Email is already in use!",
//                    HttpStatus.BAD_REQUEST);
//        }

        // Creating user's account
        User user = new User(signUpRequest.getUsername(), encoder.encode(signUpRequest.getPassword()),
                "USER", signUpRequest.getName(), signUpRequest.getEmail());


        userRepository.save(user);

        return ResponseEntity.ok().body("User registered successfully!");
    }
}