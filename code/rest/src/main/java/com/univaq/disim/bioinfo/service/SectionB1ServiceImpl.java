package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.A1;
import com.univaq.disim.bioinfo.model.section.B1;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionA1Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionB1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;

@Service
public class SectionB1ServiceImpl implements SectionB1Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public B1 insert(String username, B1 b1) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
//            throw new BusinessLayerException(HttpStatus.BAD_REQUEST, ErrorMessage.DB_CODE_NUMBER_ALREADY_IN_USE);
            return this.update(username, b1);

        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);

            q.setB1(b1);

            return questionnaireRepository.insert(q).getB1();
        }
    }

    @Override
    public B1 get(String username) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
        return q.getB1();
    }

    @Override
    public B1 update(String username, B1 b1) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        q.setB1(b1);

        return questionnaireRepository.save(q).getB1();
    }

    @Override
    public void delete(String documentId) {

    }
}
