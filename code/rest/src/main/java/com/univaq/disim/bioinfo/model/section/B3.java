package com.univaq.disim.bioinfo.model.section;

import com.univaq.disim.bioinfo.model.nested.Smoking;
import com.univaq.disim.bioinfo.model.nested.Vitamin;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.HashMap;
import java.util.List;

public class B3 {
    @Field
    private Smoking smoker;

    //It can be: Never,	1-3 days/month, 1-3 days/week, 4-6 days/week, Everyday
    // TODO: it can be optional
    @Field
    private Boolean intakeOfVitaminesDuringLastYears;
    @Field
    private String frequencyOfVitaminsDuringLastYears;


    // The following attribute incorporate questions 17 and 18 of session B
    // TODO: it can be optional
    @Field
    private HashMap<String, Vitamin> vitamin;

    public Smoking getSmoker() {
        return smoker;
    }

    public void setSmoker(Smoking smoker) {
        this.smoker = smoker;
    }

    public Boolean getIntakeOfVitaminesDuringLastYears() {
        return intakeOfVitaminesDuringLastYears;
    }

    public void setIntakeOfVitaminesDuringLastYears(Boolean intakeOfVitaminesDuringLastYears) {
        this.intakeOfVitaminesDuringLastYears = intakeOfVitaminesDuringLastYears;
    }

    public String getFrequencyOfVitaminsDuringLastYears() {
        return frequencyOfVitaminsDuringLastYears;
    }

    public void setFrequencyOfVitaminsDuringLastYears(String frequencyOfVitaminsDuringLastYears) {
        this.frequencyOfVitaminsDuringLastYears = frequencyOfVitaminsDuringLastYears;
    }

    public HashMap<String, Vitamin> getVitamin() {
        return vitamin;
    }

    public void setVitamin(HashMap<String, Vitamin> vitamin) {
        this.vitamin = vitamin;
    }
}
