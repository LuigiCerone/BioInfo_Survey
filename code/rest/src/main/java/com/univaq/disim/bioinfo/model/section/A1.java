package com.univaq.disim.bioinfo.model.section;

import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Null;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

public class A1 {

    @Field
    private String subject;

    @Field
    private String dbCodeNumber;

    @Field
    private Long dateOfQuestionnaireAdministration;

    @Field
    private List<Long> datesOfUpdateQuestionnaire;

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

    public Long getDateOfQuestionnaireAdministration() {
        return dateOfQuestionnaireAdministration;
    }

    public void setDateOfQuestionnaireAdministration(String dateOfQuestionnaireAdministration) {
        Long millis = null;
        try {
            millis = new SimpleDateFormat("dd/MMM/yyyy").parse(dateOfQuestionnaireAdministration).getTime();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        this.dateOfQuestionnaireAdministration = millis;
    }

    public List<Long> getDatesOfUpdateQuestionnaire() {
        return datesOfUpdateQuestionnaire;
    }

    public void setDatesOfUpdateQuestionnaire(List<Long> datesOfUpdateQuestionnaire) {
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
