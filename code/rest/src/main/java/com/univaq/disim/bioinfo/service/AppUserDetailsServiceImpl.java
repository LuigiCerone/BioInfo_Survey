package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.User;
import com.univaq.disim.bioinfo.repository.UserRepository;
import com.univaq.disim.bioinfo.service.interfaces.AppUserDetailsService;
import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

/**
 * Responsible for retrieving information about a specific user in the login phase.
 */
@Service
public class AppUserDetailsServiceImpl implements UserDetailsService, AppUserDetailsService {
    private static final Logger logger = LoggerFactory.getLogger(AppUserDetailsServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        User user = userRepository.findByUsername(username);

        if (user == null)
            throw new UsernameNotFoundException("User No t Found with -> username or email : " + username);

        return new org.springframework.security.core.userdetails.User(user.getUsername(),
                user.getPassword(),
                Collections.singleton(new SimpleGrantedAuthority("ROLE_" + user.getRole())));
    }

    @Override
    public User findOneByUsername(String username) throws BusinessLayerException {
        User user = userRepository.findByUsername(username);
        if (user == null){
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, "User not found with username: " + username);
        }
        return user;
    }

    @Override
    public User save(User user) throws BusinessLayerException {
        User u = userRepository.save(user);
        return u;
    }

    @Override
    public User generateAndSaveUser(String role) {

        // Check that username is unique.
        User user;
        String username;
        do {
            username = RandomStringUtils.random(10, true, false);
            user = userRepository.findByUsername(username);
        } while (user != null);

        String password = RandomStringUtils.random(10, true, true);

        user = new User(username, encoder.encode(password), role);
        userRepository.save(user);

        // Client has to get the real psw.
        user.setPassword(password);
        return user;
    }
}