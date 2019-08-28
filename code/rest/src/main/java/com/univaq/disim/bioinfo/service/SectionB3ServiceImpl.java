package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.B2;
import com.univaq.disim.bioinfo.model.section.B3;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionB2Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionB3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionB3ServiceImpl implements SectionB3Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public B3 insert(String username, B3 b3) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
            return this.update(username, b3);
        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);
            q.setB3(b3);
            return questionnaireRepository.insert(q).getB3();
        }
    }

    @Override
    public B3 get(String username) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
        return q.getB3();
    }

    @Override
    public B3 update(String username, B3 b3) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        q.setB3(b3);

        return questionnaireRepository.save(q).getB3();
    }

    @Override
    public void delete(String documentId) {

    }
}
