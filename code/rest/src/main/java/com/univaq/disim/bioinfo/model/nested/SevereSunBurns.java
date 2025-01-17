package com.univaq.disim.bioinfo.model.nested;

public class SevereSunBurns {

    // It can be: at age <18 yrs, at age ≥18 yrs, at site of melanoma, in the last 5 yrs
    private String period;

    // It can be: yes, no, not known
    private String presence;

    // Number of sun burns
    private int number;


    public SevereSunBurns(){ }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getPresence() {
        return presence;
    }

    public void setPresence(String presence) {
        this.presence = presence;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
