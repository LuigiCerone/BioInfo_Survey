package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.C3;
import com.univaq.disim.bioinfo.model.section.D;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionC3Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionDServiceImpl implements SectionDService {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public D insert(String username, D d, int type) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);


        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
//            throw new BusinessLayerException(HttpStatus.BAD_REQUEST, ErrorMessage.DB_CODE_NUMBER_ALREADY_IN_USE);
            return this.update(username, d, type);

        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);

            q.addD(type, d);

            // Set completed status.
            q.setCompleted(true);

            return questionnaireRepository.insert(q).getD().get(type);
        }
    }

    @Override
    public D get(String username, int type) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null || q.getD() == null){
            return null;
        }
        return q.getD().get(type);
    }

    @Override
    public D update(String username, D d, int type) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        q.addD(type, d);
        // Set completed status.
        q.setCompleted(true);

        return questionnaireRepository.save(q).getD().get(type);
    }

    @Override
    public void delete(String documentId) {

    }

    @Override
    public int insertNumber(String username, int number) {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        q.setNumberOfMPM(number);
        return questionnaireRepository.save(q).getNumberOfMPM();
    }

    @Override
    public int getNumber(String username) {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            return 0;
        } else {
            return q.getNumberOfMPM();
        }
    }
}
