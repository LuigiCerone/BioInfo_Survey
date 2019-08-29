package com.univaq.disim.bioinfo.model.section;

import com.univaq.disim.bioinfo.model.nested.*;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.HashMap;
import java.util.List;

public class C2 {
    @Field
    private List<MedicalDiagnosis> medicalDiagnoses;

    //TODO: Optional
    @Field
    private List<Treatment> previousAndConcomitantTreatments;

    @Field
    private PregnanciesInfo pregnancyHistory;

    @Field
    private HashMap<String, NonMelanomaSkinCancer> lifetimeHistoryOfNonMelanomaSkinCancer;

    @Field
    private List<NonCutaneousNeoplasia> nonCutaneousNeoplasias;

    public C2(){ }

    public List<MedicalDiagnosis> getMedicalDiagnoses() {
        return medicalDiagnoses;
    }

    public void setMedicalDiagnoses(List<MedicalDiagnosis> medicalDiagnoses) {
        this.medicalDiagnoses = medicalDiagnoses;
    }

    public List<Treatment> getPreviousAndConcomitantTreatments() {
        return previousAndConcomitantTreatments;
    }

    public void setPreviousAndConcomitantTreatments(List<Treatment> previousAndConcomitantTreatments) {
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

    public List<NonCutaneousNeoplasia> getNonCutaneousNeoplasias() {
        return nonCutaneousNeoplasias;
    }

    public void setNonCutaneousNeoplasias(List<NonCutaneousNeoplasia> nonCutaneousNeoplasias) {
        this.nonCutaneousNeoplasias = nonCutaneousNeoplasias;
    }
}
