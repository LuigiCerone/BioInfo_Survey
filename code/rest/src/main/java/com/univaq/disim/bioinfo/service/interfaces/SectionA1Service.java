package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.A1;

public interface SectionA1Service {

    A1 insert(String username, A1 a1) throws BusinessLayerException;

    A1 get(String username) throws BusinessLayerException;

    A1 update(String username, A1 a1) throws BusinessLayerException;

    void delete(String documentId);
}
