package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.B1;
import com.univaq.disim.bioinfo.model.section.C1;

public interface SectionC1Service {

    C1 insert(String username, C1 c1) throws BusinessLayerException;

    C1 get(String username) throws BusinessLayerException;

    C1 update(String username, C1 c1) throws BusinessLayerException;

    void delete(String documentId);
}
