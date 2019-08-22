package com.univaq.disim.bioinfo.service;

import com.univaq.disim.bioinfo.model.Questionnaire;
import com.univaq.disim.bioinfo.repository.QuestionnaireRepository;
import com.univaq.disim.bioinfo.service.interfaces.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class QuestionnaireServiceImpl implements QuestionnaireService {

    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public Questionnaire findOneByCodeNumber(String codeNumber) {
        return questionnaireRepository.findByDbCodeNumber(codeNumber);
    }

    @Override
    public Questionnaire findOneByUsername(String ownerUsername) {
        return questionnaireRepository.findOneByOwnerUsername(ownerUsername);
    }

    @Override
    public Questionnaire insert(Questionnaire q) {
        return questionnaireRepository.insert(q);
    }

    @Override
    public Questionnaire update(Questionnaire q) {
        return questionnaireRepository.insert(q);
    }

    @Override
    public List<Questionnaire> findAll() {
        return questionnaireRepository.findAll();
    }
}
