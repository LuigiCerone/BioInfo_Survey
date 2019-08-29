package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.section.B3;
import com.univaq.disim.bioinfo.model.section.E;

public interface SectionEService {

    E insert(String username, E e, char type) throws BusinessLayerException;

    E get(String username, char type) throws BusinessLayerException;

    E update(String username, E e, char type) throws BusinessLayerException;

    void delete(String documentId);
}
