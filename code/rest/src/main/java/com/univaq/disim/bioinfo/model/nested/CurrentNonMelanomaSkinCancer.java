package com.univaq.disim.bioinfo.model.nested;

public class CurrentNonMelanomaSkinCancer {
    // It can be BCC, SCC or in situ SCC
    private String type;

    private boolean presence;

    private String site;

    private int number;


    public CurrentNonMelanomaSkinCancer(){ }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isPresence() {
        return presence;
    }

    public void setPresence(boolean presence) {
        this.presence = presence;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
