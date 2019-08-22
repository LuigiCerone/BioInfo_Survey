package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.A1;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionA1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionA1ServiceImpl implements SectionA1Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public A1 insert(String username, String dbCodeNumber, A1 a1) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findByDbCodeNumber(dbCodeNumber);


        if (q != null) {
            // There is an error, the db number is already in use.
            throw new BusinessLayerException(HttpStatus.BAD_REQUEST, ErrorMessage.DB_CODE_NUMBER_ALREADY_IN_USE);

        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);
            q.setA1(a1);
            return questionnaireRepository.insert(q).getA1();
        }
    }

    @Override
    public A1 get(String dbCodeNumber) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findByDbCodeNumber(dbCodeNumber);

        if(q.getA1() == null){
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        return q.getA1();
    }

    @Override
    public A1 update(String documentId, A1 a1) {
        return null;
    }

    @Override
    public void delete(String documentId) {

    }
}
