package com.univaq.disim.bioinfo.model.section;

import com.univaq.disim.bioinfo.model.nested.MutationalData;
import com.univaq.disim.bioinfo.model.nested.OtherMainHistopatologicFeatures;
import org.springframework.data.mongodb.core.mapping.Field;

public class D {

    @Field
    private String identifier;

    // if the list is empty than there aren't case of this type
    @Field
    private boolean preExistingPigmentedLesionAtTheSameSiteOfMelanoma;

    // It can be Patient, Relative/Spouse/Friend, Physician , Other
    //TODO: optional
    @Field
    private String detectionOfMelanoma;

    // It can be Never, Once, Once/year, More than once/year
    //TODO: optional
    @Field
    private String selfSkinExam;

    // It can be Never, Once, Once/year, More than once/year,Do not recall a physician ever examining my skin
    //TODO: optional
    @Field
    private String skinExamByPhysician;

    @Field
    private Boolean presenceOfMPM;

    @Field
    private String dateOfDiagnosis;

    @Field
    private Boolean primaryTumorKnown;

    @Field
    private String site;

    @Field
    private Double breslowThinkness;

    @Field
    private OtherMainHistopatologicFeatures otherMainHistopatologicFeatures;

    // It can be: YES, NO, Not done, Not known
    @Field
    private boolean sentinelLymphNodebiopsyDone;

    // It can be: Positive or negative or empty
    @Field
    private String sentinelLymphNodebiopsyResult;

    @Field
    private String ajccStageAtDiagnosis;

    @Field
    private MutationalData mutationalData;

    public D(){ }

    public String getIdentifier() {
        return identifier;
    }

    public void setIdentifier(String identifier) {
        this.identifier = identifier;
    }


    public String getDateOfDiagnosis() {
        return dateOfDiagnosis;
    }

    public void setDateOfDiagnosis(String dateOfDiagnosis) {
        this.dateOfDiagnosis = dateOfDiagnosis;
    }

    public Boolean getPresenceOfMPM() {
        return presenceOfMPM;
    }

    public void setPresenceOfMPM(Boolean presenceOfMPM) {
        this.presenceOfMPM = presenceOfMPM;
    }

    public boolean isPreExistingPigmentedLesionAtTheSameSiteOfMelanoma() {
        return preExistingPigmentedLesionAtTheSameSiteOfMelanoma;
    }

    public void setPreExistingPigmentedLesionAtTheSameSiteOfMelanoma(boolean preExistingPigmentedLesionAtTheSameSiteOfMelanoma) {
        this.preExistingPigmentedLesionAtTheSameSiteOfMelanoma = preExistingPigmentedLesionAtTheSameSiteOfMelanoma;
    }

    public String getDetectionOfMelanoma() {
        return detectionOfMelanoma;
    }

    public void setDetectionOfMelanoma(String detectionOfMelanoma) {
        this.detectionOfMelanoma = detectionOfMelanoma;
    }


    public String getSelfSkinExam() {
        return selfSkinExam;
    }

    public void setSelfSkinExam(String selfSkinExam) {
        this.selfSkinExam = selfSkinExam;
    }

    public String getSkinExamByPhysician() {
        return skinExamByPhysician;
    }

    public void setSkinExamByPhysician(String skinExamByPhysician) {
        this.skinExamByPhysician = skinExamByPhysician;
    }

    public Boolean getPrimaryTumorKnown() {
        return primaryTumorKnown;
    }

    public void setPrimaryTumorKnown(Boolean primaryTumorKnown) {
        this.primaryTumorKnown = primaryTumorKnown;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public Double getBreslowThinkness() {
        return breslowThinkness;
    }

    public void setBreslowThinkness(Double breslowThinkness) {
        this.breslowThinkness = breslowThinkness;
    }

    public OtherMainHistopatologicFeatures getOtherMainHistopatologicFeatures() {
        return otherMainHistopatologicFeatures;
    }

    public void setOtherMainHistopatologicFeatures(OtherMainHistopatologicFeatures otherMainHistopatologicFeatures) {
        this.otherMainHistopatologicFeatures = otherMainHistopatologicFeatures;
    }

    public boolean isSentinelLymphNodebiopsyDone() {
        return sentinelLymphNodebiopsyDone;
    }

    public void setSentinelLymphNodebiopsyDone(boolean sentinelLymphNodebiopsyDone) {
        this.sentinelLymphNodebiopsyDone = sentinelLymphNodebiopsyDone;
    }

    public String getSentinelLymphNodebiopsyResult() {
        return sentinelLymphNodebiopsyResult;
    }

    public void setSentinelLymphNodebiopsyResult(String sentinelLymphNodebiopsyResult) {
        this.sentinelLymphNodebiopsyResult = sentinelLymphNodebiopsyResult;
    }

    public String getAjccStageAtDiagnosis() {
        return ajccStageAtDiagnosis;
    }

    public void setAjccStageAtDiagnosis(String ajccStageAtDiagnosis) {
        this.ajccStageAtDiagnosis = ajccStageAtDiagnosis;
    }

    public MutationalData getMutationalData() {
        return mutationalData;
    }

    public void setMutationalData(MutationalData mutationalData) {
        this.mutationalData = mutationalData;
    }
}
