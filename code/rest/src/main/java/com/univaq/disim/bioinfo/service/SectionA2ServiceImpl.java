package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.A2;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionA2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionA2ServiceImpl implements SectionA2Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public A2 insert(String username, A2 a2) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
//            throw new BusinessLayerException(HttpStatus.BAD_REQUEST, ErrorMessage.DB_CODE_NUMBER_ALREADY_IN_USE);
            return this.update(username, a2);

        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);

            q.setA2(a2);


            return questionnaireRepository.insert(q).getA2();
        }
    }

    @Override
    public A2 get(String username) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
//        if (q.getA2() == null){
//            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
//        }
        return q.getA2();
    }

    @Override
    public A2 update(String username, A2 a2) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }

        q.setA2(a2);

        return questionnaireRepository.save(q).getA2();
    }

    @Override
    public void delete(String documentId) {

    }
}
