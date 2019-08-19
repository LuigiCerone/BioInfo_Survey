package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.A1;

public interface SectionA1Service {

    A1 insert(String documentId, A1 a1) throws BusinessLayerException;

    A1 get(String documentId) throws BusinessLayerException;

    A1 update(String documentId, A1 a1);

    void delete(String documentId);
}
