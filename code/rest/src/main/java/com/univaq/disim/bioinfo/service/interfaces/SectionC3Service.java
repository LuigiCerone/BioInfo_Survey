package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.C2;
import com.univaq.disim.bioinfo.model.section.C3;

public interface SectionC3Service {

    C3 insert(String username, C3 c2) throws BusinessLayerException;

    C3 get(String username) throws BusinessLayerException;

    C3 update(String username, C3 c2) throws BusinessLayerException;

    void delete(String documentId);
}
