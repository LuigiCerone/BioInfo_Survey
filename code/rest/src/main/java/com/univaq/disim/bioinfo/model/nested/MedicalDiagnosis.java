package com.univaq.disim.bioinfo.model.nested;

public class MedicalDiagnosis {
    private String diagnosisName;

    private String icd10Code;

    public MedicalDiagnosis(){ }

    public String getDiagnosisName() {
        return diagnosisName;
    }

    public void setDiagnosisName(String diagnosisName) {
        this.diagnosisName = diagnosisName;
    }

    public String getIcd10Code() {
        return icd10Code;
    }

    public void setIcd10Code(String icd10Code) {
        this.icd10Code = icd10Code;
    }
}
