package com.univaq.disim.bioinfo.model.nested;

public class FamilyHistory {
    private String type;

    // It can be maternal or paternal side
    private String sideOfAffectedRelative;

    // It can be 1st, 2nd, 3rd
    private String degreeOfRelative;

    private String ageAtDiagnosis;


    public FamilyHistory(){ }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSideOfAffectedRelative() {
        return sideOfAffectedRelative;
    }

    public void setSideOfAffectedRelative(String sideOfAffectedRelative) {
        this.sideOfAffectedRelative = sideOfAffectedRelative;
    }

    public String getDegreeOfRelative() {
        return degreeOfRelative;
    }

    public void setDegreeOfRelative(String degreeOfRelative) {
        this.degreeOfRelative = degreeOfRelative;
    }

    public String getAgeAtDiagnosis() {
        return ageAtDiagnosis;
    }

    public void setAgeAtDiagnosis(String ageAtDiagnosis) {
        this.ageAtDiagnosis = ageAtDiagnosis;
    }
}
