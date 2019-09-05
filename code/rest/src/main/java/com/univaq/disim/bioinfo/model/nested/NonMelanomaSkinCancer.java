package com.univaq.disim.bioinfo.model.nested;

public class NonMelanomaSkinCancer {

    private int number;

    //It can be after or before melanoma
    private String when;

    private String site;

    private String dateOfDiagnosis;

    public NonMelanomaSkinCancer(){ }
    
    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getWhen() {
        return when;
    }

    public void setWhen(String when) {
        this.when = when;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getDateOfDiagnosis() {
        return dateOfDiagnosis;
    }

    public void setDateOfDiagnosis(String dateOfDiagnosis) {
        this.dateOfDiagnosis = dateOfDiagnosis;
    }
}
