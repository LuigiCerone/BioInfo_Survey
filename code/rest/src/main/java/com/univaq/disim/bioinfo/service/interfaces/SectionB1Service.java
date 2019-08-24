package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.A1;
import com.univaq.disim.bioinfo.model.section.B1;

public interface SectionB1Service {

    B1 insert(String username, B1 b1) throws BusinessLayerException;

    B1 get(String username) throws BusinessLayerException;

    B1 update(String username, B1 b1) throws BusinessLayerException;

    void delete(String documentId);
}
