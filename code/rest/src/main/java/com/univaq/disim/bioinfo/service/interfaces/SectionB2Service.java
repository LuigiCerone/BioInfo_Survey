package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.B1;
import com.univaq.disim.bioinfo.model.section.B2;

public interface SectionB2Service {

    B2 insert(String username, B2 b1) throws BusinessLayerException;

    B2 get(String username) throws BusinessLayerException;

    B2 update(String username, B2 b1) throws BusinessLayerException;

    void delete(String documentId);
}
