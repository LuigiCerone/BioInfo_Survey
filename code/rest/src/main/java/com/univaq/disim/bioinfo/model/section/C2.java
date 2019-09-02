package com.univaq.disim.bioinfo.model.section;

import com.univaq.disim.bioinfo.model.nested.*;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Null;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class C2 {
    // TODO Alcuni campi si devono trasformare in liste.

    @Field
    private ArrayList<MedicalDiagnosis> medicalDiagnoses;

    //TODO: Optional
    @Nullable
    @Field
    private ArrayList<Treatment> previousAndConcomitantTreatments;

    @Field
    private PregnanciesInfo pregnancyHistory;

    @Field
    private HashMap<String, NonMelanomaSkinCancer> lifetimeHistoryOfNonMelanomaSkinCancer;

    @Field
    private NonCutaneousNeoplasia nonCutaneousNeoplasias;

    public C2(){ }

    public ArrayList<MedicalDiagnosis> getMedicalDiagnoses() {
        return medicalDiagnoses;
    }

    public void setMedicalDiagnoses(ArrayList<MedicalDiagnosis> medicalDiagnoses) {
        this.medicalDiagnoses = medicalDiagnoses;
    }

    @Nullable
    public ArrayList<Treatment> getPreviousAndConcomitantTreatments() {
        return previousAndConcomitantTreatments;
    }

    public void setPreviousAndConcomitantTreatments(@Nullable ArrayList<Treatment> previousAndConcomitantTreatments) {
        this.previousAndConcomitantTreatments = previousAndConcomitantTreatments;
    }

    public PregnanciesInfo getPregnancyHistory() {
        return pregnancyHistory;
    }

    public void setPregnancyHistory(PregnanciesInfo pregnancyHistory) {
        this.pregnancyHistory = pregnancyHistory;
    }

    public HashMap<String, NonMelanomaSkinCancer> getLifetimeHistoryOfNonMelanomaSkinCancer() {
        return lifetimeHistoryOfNonMelanomaSkinCancer;
    }

    public void setLifetimeHistoryOfNonMelanomaSkinCancer(HashMap<String, NonMelanomaSkinCancer> lifetimeHistoryOfNonMelanomaSkinCancer) {
        this.lifetimeHistoryOfNonMelanomaSkinCancer = lifetimeHistoryOfNonMelanomaSkinCancer;
    }

    public NonCutaneousNeoplasia getNonCutaneousNeoplasias() {
        return nonCutaneousNeoplasias;
    }

    public void setNonCutaneousNeoplasias(NonCutaneousNeoplasia nonCutaneousNeoplasias) {
        this.nonCutaneousNeoplasias = nonCutaneousNeoplasias;
    }
}
