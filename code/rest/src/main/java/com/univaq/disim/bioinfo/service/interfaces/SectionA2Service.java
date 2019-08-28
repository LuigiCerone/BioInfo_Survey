package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.A1;
import com.univaq.disim.bioinfo.model.section.A2;

public interface SectionA2Service {

    A2 insert(String username, A2 a2) throws BusinessLayerException;

    A2 get(String username) throws BusinessLayerException;

    A2 update(String username, A2 a2) throws BusinessLayerException;

    void delete(String documentId);
}
