package com.univaq.disim.bioinfo.model.section;

import org.springframework.data.mongodb.core.mapping.Field;

public class B1 {

    @Field
    private String skinType1;

    @Field
    private String skinType2;

    @Field
    private String eyeColor;

    @Field
    private String hairColor;

    @Field
    private String freckles;

    @Field
    private String neviInChildhoodAdolescence;

    public B1(){ }

    public String getSkinType1() {
        return skinType1;
    }

    public void setSkinType1(String skinType1) {
        this.skinType1 = skinType1;
    }

    public String getSkinType2() {
        return skinType2;
    }

    public void setSkinType2(String skinType2) {
        this.skinType2 = skinType2;
    }

    public String getEyeColor() {
        return eyeColor;
    }

    public void setEyeColor(String eyeColor) {
        this.eyeColor = eyeColor;
    }

    public String getHairColor() {
        return hairColor;
    }

    public void setHairColor(String hairColor) {
        this.hairColor = hairColor;
    }

    public String getFreckles() {
        return freckles;
    }

    public void setFreckles(String freckles) {
        this.freckles = freckles;
    }

    public String getNeviInChildhoodAdolescence() {
        return neviInChildhoodAdolescence;
    }

    public void setNeviInChildhoodAdolescence(String neviInChildhoodAdolescence) {
        this.neviInChildhoodAdolescence = neviInChildhoodAdolescence;
    }
}