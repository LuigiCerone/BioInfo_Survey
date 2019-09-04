package com.univaq.disim.bioinfo.model.section;

import com.univaq.disim.bioinfo.model.nested.*;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.lang.Nullable;

import java.util.HashMap;
import java.util.List;

public class B2 {
    //TODO: check if it is an outdoor occupation with at least 4 hours/day spent outdoor in the sun
    @Field
    private OccupationalSunExposure occupationalSunExposure;

    //TODO: check if it is an outdoor activity with at least 4 hours/day spent outdoor in the sun
    @Field
    private RecreationalSunExposure recreationalSunExposure;

    @Field
    private HashMap<String, Object> intermittentSunExposure;

    //It should be a date
    @Field
    private String mostRecentIntermittentSunExposure;

    @Field
    private HashMap<String, SevereSunBurns> severeSunBurns;

    @Field
    private HashMap<String, SunscreenUse> sunscreenUses;

    // It can be Never, <50% of time exposure, >50% of time exposure, Always, Not known
    //TODO: it's an optional answer
    @Field
    private String sunProtectionOtherThanSunscreenUseHat;

    // It can be Never, <50% of time exposure, >50% of time exposure, Always, Not known
    //TODO: it's an optional answer
    @Field
    private String sunProtectionOtherThanSunscreenUseClothing;

    // It can be Rarely, Sometimes, Always, Not known
    //TODO: it's an optional answer
    @Field
    private String seekTheShadeDuringUVRHours;

    @Field
    private SunlampsSunbeds sunlampsSunbeds;

    // It can be ever or never
    @Field
    @Nullable
    private String phototherapyUvbpuva;

    public B2(){ }


    public OccupationalSunExposure getOccupationalSunExposure() {
        return occupationalSunExposure;
    }

    public void setOccupationalSunExposure(OccupationalSunExposure occupationalSunExposure) {
        this.occupationalSunExposure = occupationalSunExposure;
    }

    public RecreationalSunExposure getRecreationalSunExposure() {
        return recreationalSunExposure;
    }

    public void setRecreationalSunExposure(RecreationalSunExposure recreationalSunExposure) {
        this.recreationalSunExposure = recreationalSunExposure;
    }

    public HashMap<String, Object> getIntermittentSunExposure() {
        return intermittentSunExposure;
    }

    public void setIntermittentSunExposure(HashMap<String, Object> intermittentSunExposure) {
        this.intermittentSunExposure = intermittentSunExposure;
    }

    public String getMostRecentIntermittentSunExposure() {
        return mostRecentIntermittentSunExposure;
    }

    public void setMostRecentIntermittentSunExposure(String mostRecentIntermittentSunExposure) {
        this.mostRecentIntermittentSunExposure = mostRecentIntermittentSunExposure;
    }

    public HashMap<String, SevereSunBurns> getSevereSunBurns() {
        return severeSunBurns;
    }

    public void setSevereSunBurns(HashMap<String, SevereSunBurns> severeSunBurns) {
        this.severeSunBurns = severeSunBurns;
    }

    public HashMap<String, SunscreenUse> getSunscreenUses() {
        return sunscreenUses;
    }

    public void setSunscreenUses(HashMap<String, SunscreenUse> sunscreenUses) {
        this.sunscreenUses = sunscreenUses;
    }

    public String getSunProtectionOtherThanSunscreenUseHat() {
        return sunProtectionOtherThanSunscreenUseHat;
    }

    public void setSunProtectionOtherThanSunscreenUseHat(String sunProtectionOtherThanSunscreenUseHat) {
        this.sunProtectionOtherThanSunscreenUseHat = sunProtectionOtherThanSunscreenUseHat;
    }

    public String getSunProtectionOtherThanSunscreenUseClothing() {
        return sunProtectionOtherThanSunscreenUseClothing;
    }

    public void setSunProtectionOtherThanSunscreenUseClothing(String sunProtectionOtherThanSunscreenUseClothing) {
        this.sunProtectionOtherThanSunscreenUseClothing = sunProtectionOtherThanSunscreenUseClothing;
    }

    public String getSeekTheShadeDuringUVRHours() {
        return seekTheShadeDuringUVRHours;
    }

    public void setSeekTheShadeDuringUVRHours(String seekTheShadeDuringUVRHours) {
        this.seekTheShadeDuringUVRHours = seekTheShadeDuringUVRHours;
    }

    public SunlampsSunbeds getSunlampsSunbeds() {
        return sunlampsSunbeds;
    }

    public void setSunlampsSunbeds(SunlampsSunbeds sunlampsSunbeds) {
        this.sunlampsSunbeds = sunlampsSunbeds;
    }

    @Nullable
    public String getPhototherapyUvbpuva() {
        return phototherapyUvbpuva;
    }

    public void setPhototherapyUvbpuva(@Nullable String phototherapyUvbpuva) {
        this.phototherapyUvbpuva = phototherapyUvbpuva;
    }
}
