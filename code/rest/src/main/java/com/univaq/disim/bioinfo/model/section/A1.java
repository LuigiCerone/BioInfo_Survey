package com.univaq.disim.bioinfo.model.section;

import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Null;
import java.util.List;

public class A1 {

    @Field
    private String subject;

    @Field
    private String dbCodeNumber;

    @Field
    private String dateOfQuestionnaireAdministration;

    @Field
    private List<String> datesOfUpdateQuestionnaire;

    @Field
    private String typeOfMelanoma;

    @Nullable
    @Field
    private String otherSpecification;

    public A1(){ }


    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDbCodeNumber() {
        return dbCodeNumber;
    }

    public void setDbCodeNumber(String dbCodeNumber) {
        this.dbCodeNumber = dbCodeNumber;
    }

    public String getDateOfQuestionnaireAdministration() {
        return dateOfQuestionnaireAdministration;
    }

    public void setDateOfQuestionnaireAdministration(String dateOfQuestionnaireAdministration) {
        this.dateOfQuestionnaireAdministration = dateOfQuestionnaireAdministration;
    }

    public List<String> getDatesOfUpdateQuestionnaire() {
        return datesOfUpdateQuestionnaire;
    }

    public void setDatesOfUpdateQuestionnaire(List<String> datesOfUpdateQuestionnaire) {
        this.datesOfUpdateQuestionnaire = datesOfUpdateQuestionnaire;
    }

    public String getTypeOfMelanoma() {
        return typeOfMelanoma;
    }

    public void setTypeOfMelanoma(String typeOfMelanoma) {
        this.typeOfMelanoma = typeOfMelanoma;
    }

    @Nullable
    public String getOtherSpecification() {
        return otherSpecification;
    }

    public void setOtherSpecification(@Nullable String otherSpecification) {
        this.otherSpecification = otherSpecification;
    }
}
