package com.univaq.disim.bioinfo.model.nested;

public class ActinicKeratoses {
    // It can be: : scalp, face, other exposed areas (hands, arms, trunk, legs)
    private String site;

    // It can be: isolated/scattered, clustered, confluent
    private String typeOfDistribution;

    private boolean presence;


    public ActinicKeratoses(){ }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getTypeOfDistribution() {
        return typeOfDistribution;
    }

    public void setTypeOfDistribution(String typeOfDistribution) {
        this.typeOfDistribution = typeOfDistribution;
    }

    public boolean isPresence() {
        return presence;
    }

    public void setPresence(boolean presence) {
        this.presence = presence;
    }
}
