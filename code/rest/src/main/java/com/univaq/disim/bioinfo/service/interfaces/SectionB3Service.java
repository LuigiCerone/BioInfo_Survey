package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.B2;
import com.univaq.disim.bioinfo.model.section.B3;

public interface SectionB3Service {

    B3 insert(String username, B3 b3) throws BusinessLayerException;

    B3 get(String username) throws BusinessLayerException;

    B3 update(String username, B3 b3) throws BusinessLayerException;

    void delete(String documentId);
}
