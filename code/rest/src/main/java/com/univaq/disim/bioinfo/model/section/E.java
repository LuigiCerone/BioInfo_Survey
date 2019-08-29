package com.univaq.disim.bioinfo.model.section;

import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

public class E {
    // It can be: All questions, Most questions, Nearly half of the questions, Very few questions
    @Field
    private String complexityOfTheQuestionnaire;

    @Field
    private String difficultQuestions;

    public E(){ }

    public String getComplexityOfTheQuestionnaire() {
        return complexityOfTheQuestionnaire;
    }

    public void setComplexityOfTheQuestionnaire(String complexityOfTheQuestionnaire) {
        this.complexityOfTheQuestionnaire = complexityOfTheQuestionnaire;
    }

    public String getDifficultQuestions() {
        return difficultQuestions;
    }

    public void setDifficultQuestions(String difficultQuestions) {
        this.difficultQuestions = difficultQuestions;
    }
}
