package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.BusinessLayerException;
import com.univaq.disim.bioinfo.model.ErrorMessage;
import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.model.section.B3;
import com.univaq.disim.bioinfo.model.section.E;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.SectionB3Service;
import com.univaq.disim.bioinfo.service.interfaces.SectionEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SectionEServiceImpl implements SectionEService {
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public E insert(String username, E e, char type) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q != null) {
            // There is an error, the user has already inserted a questionnaire.
            return this.update(username, e, type);
        } else {
            q = new Questionnaire();
            q.setOwnerUsername(username);

            if (type == 'B'){
                q.setBe(e);
                return questionnaireRepository.insert(q).getBe();
            } else if(type == 'C'){
                q.setCe(e);
                return questionnaireRepository.insert(q).getCe();
            }
            return null;
        }
    }

    @Override
    public E get(String username, char type) throws BusinessLayerException{
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if ( q == null){
            return null;
        }
        if (type == 'B'){
            return q.getBe();
        } else if(type == 'C'){
            return q.getCe();
        }
        return null;
    }

    @Override
    public E update(String username, E e, char type) throws BusinessLayerException {
        Questionnaire q = questionnaireRepository.findOneByOwnerUsername(username);

        if (q == null) {
            // There is an error, the user has already inserted a questionnaire.
            throw new BusinessLayerException(HttpStatus.NOT_FOUND, ErrorMessage.SECTION_MISSING);
        }
        if (type == 'B'){
            q.setBe(e);
            return questionnaireRepository.save(q).getBe();
        } else if(type == 'C'){
            q.setCe(e);
            return questionnaireRepository.save(q).getCe();
        }
        return null;
    }

    @Override
    public void delete(String documentId) {

    }
}
