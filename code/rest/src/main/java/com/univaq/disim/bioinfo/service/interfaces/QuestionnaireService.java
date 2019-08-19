package com.univaq.disim.bioinfo.service.interfaces;

import com.univaq.disim.bioinfo.model.Questionnaire;

import java.util.List;

public interface QuestionnaireService {
    Questionnaire findOneByCodeNumber(String codeNumber);

    Questionnaire insert(Questionnaire q);

    Questionnaire update(Questionnaire q);

    List<Questionnaire> findAll ();
}
