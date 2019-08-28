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

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class SectionA1ServiceImpl implements SectionA1Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public A1 insert(String username, A1 a1) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
//            throw new BusinessLayerException(HttpStatus.BAD_REQUEST, ErrorMessage.DB_CODE_NUMBER_ALREADY_IN_USE);
            return this.update(username, a1);

        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);

            if( a1.getDatesOfUpdateQuestionnaire() == null){
                ArrayList<String> list = new ArrayList<String>(Collections.singleton(a1.getDateOfQuestionnaireAdministration()));
                a1.setDatesOfUpdateQuestionnaire(list);
            }
            q.setA1(a1);


            return questionnaireRepository.insert(q).getA1();
        }
    }

    @Override
    public A1 get(String username) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
        if (q.getA1() == null){
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        return q.getA1();
    }

    @Override
    public A1 update(String username, A1 a1) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }

        String updateDate = DateTimeFormatter.ofPattern("dd/MMM/yyyy").format(LocalDate.now());
        
        a1.setDatesOfUpdateQuestionnaire(q.getA1().getDatesOfUpdateQuestionnaire());
        a1.getDatesOfUpdateQuestionnaire().add(updateDate);
        q.setA1(a1);

        return questionnaireRepository.save(q).getA1();
    }

    @Override
    public void delete(String documentId) {

    }
}
