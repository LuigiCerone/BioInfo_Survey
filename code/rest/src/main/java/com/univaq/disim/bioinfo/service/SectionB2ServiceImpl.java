package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.B1;
import com.univaq.disim.bioinfo.model.section.B2;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionB1Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionB2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionB2ServiceImpl implements SectionB2Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public B2 insert(String username, B2 b2) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
            return this.update(username, b2);
        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);
            q.setB2(b2);
            return questionnaireRepository.insert(q).getB2();
        }
    }

    @Override
    public B2 get(String username) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
        return q.getB2();
    }

    @Override
    public B2 update(String username, B2 b2) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        q.setB2(b2);

        return questionnaireRepository.save(q).getB2();
    }

    @Override
    public void delete(String documentId) {

    }
}
