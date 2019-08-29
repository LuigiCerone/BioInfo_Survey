package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.B1;
import com.univaq.disim.bioinfo.model.section.C1;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionB1Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionC1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionC1ServiceImpl implements SectionC1Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public C1 insert(String username, C1 c1) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
//            throw new BusinessLayerException(HttpStatus.BAD_REQUEST, ErrorMessage.DB_CODE_NUMBER_ALREADY_IN_USE);
            return this.update(username, c1);

        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);

            q.setC1(c1);

            return questionnaireRepository.insert(q).getC1();
        }
    }

    @Override
    public C1 get(String username) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
        return q.getC1();
    }

    @Override
    public C1 update(String username, C1 c1) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        q.setC1(c1);

        return questionnaireRepository.save(q).getC1();
    }

    @Override
    public void delete(String documentId) {

    }
}
