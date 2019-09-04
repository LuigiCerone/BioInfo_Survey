package com.univaq.disim.bioinfo.model.nested;

public class Occupation {

    private String sicCode;

    //TODO: check if the duration of the occupation is at least 1 year
    private String occupationStartingTime;

    private String occupationEndingTime;

    public Occupation(){ }

    public String getSicCode() {
        return sicCode;
    }

    public void setSicCode(String sicCode) {
        this.sicCode = sicCode;
    }

    public String getOccupationStartingTime() {
        return occupationStartingTime;
    }

    public void setOccupationStartingTime(String occupationStartingTime) {
        this.occupationStartingTime = occupationStartingTime;
    }

    public String getOccupationEndingTime() {
        return occupationEndingTime;
    }

    public void setOccupationEndingTime(String occupationEndingTime) {
        this.occupationEndingTime = occupationEndingTime;
    }
}