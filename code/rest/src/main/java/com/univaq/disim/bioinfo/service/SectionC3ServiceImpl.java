package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.C2;
import com.univaq.disim.bioinfo.model.section.C3;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionC2Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionC3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionC3ServiceImpl implements SectionC3Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public C3 insert(String username, C3 c3) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
//            throw new BusinessLayerException(HttpStatus.BAD_REQUEST, ErrorMessage.DB_CODE_NUMBER_ALREADY_IN_USE);
            return this.update(username, c3);

        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);

            q.setC3(c3);

            return questionnaireRepository.insert(q).getC3();
        }
    }

    @Override
    public C3 get(String username) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
        return q.getC3();
    }

    @Override
    public C3 update(String username, C3 c3) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        q.setC3(c3);

        return questionnaireRepository.save(q).getC3();
    }

    @Override
    public void delete(String documentId) {

    }
}
