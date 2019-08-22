package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.User;

public interface AppUserDetailsService {
    public User findOneByUsername(String username) throws BusinessLayerException;

    public User save(User user) throws BusinessLayerException;

    User generateAndSaveUser(String role);
}
