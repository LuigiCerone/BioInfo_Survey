package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.B1;
import com.univaq.disim.bioinfo.model.section.C2;

public interface SectionC2Service {

    C2 insert(String username, C2 c2) throws BusinessLayerException;

    C2 get(String username) throws BusinessLayerException;

    C2 update(String username, C2 c2) throws BusinessLayerException;

    void delete(String documentId);
}
