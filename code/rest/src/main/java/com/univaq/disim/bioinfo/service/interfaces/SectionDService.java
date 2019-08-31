package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.C3;
import com.univaq.disim.bioinfo.model.section.D;

public interface SectionDService {

    D insert(String username, D d, int type) throws BusinessLayerException;

    D get(String username, int type) throws BusinessLayerException;

    D update(String username, D d, int type) throws BusinessLayerException;

    void delete(String documentId);

    int insertNumber(String username, int number);

    int getNumber(String username);
}
