package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.B1;
import com.univaq.disim.bioinfo.model.section.C2;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionB1Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionC2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionC2ServiceImpl implements SectionC2Service {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public C2 insert(String username, C2 c2) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
//            throw new BusinessLayerException(HttpStatus.BAD_REQUEST, ErrorMessage.DB_CODE_NUMBER_ALREADY_IN_USE);
            return this.update(username, c2);

        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);

            q.setC2(c2);

            return questionnaireRepository.insert(q).getC2();
        }
    }

    @Override
    public C2 get(String username) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
        return q.getC2();
    }

    @Override
    public C2 update(String username, C2 c2) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        q.setC2(c2);

        return questionnaireRepository.save(q).getC2();
    }

    @Override
    public void delete(String documentId) {

    }
}
