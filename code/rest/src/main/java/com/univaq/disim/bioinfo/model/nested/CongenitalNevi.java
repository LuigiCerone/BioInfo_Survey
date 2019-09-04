package com.univaq.disim.bioinfo.model.nested;

import org.springframework.lang.Nullable;

public class CongenitalNevi {

    private boolean presenceOfMediumSizedNevi;

    @Nullable
    private String siteOfMediumSizedNevi;

    private boolean presenceOfLargeSizedNevi;

    @Nullable
    private String siteOfLargeSizedNevi;

    private boolean presenceOfGiantSizedNevi;

    @Nullable
    private String siteOfGiantSizedNevi;

    public CongenitalNevi(){ }

    public boolean isPresenceOfMediumSizedNevi() {
        return presenceOfMediumSizedNevi;
    }

    public void setPresenceOfMediumSizedNevi(boolean presenceOfMediumSizedNevi) {
        this.presenceOfMediumSizedNevi = presenceOfMediumSizedNevi;
    }

    @Nullable
    public String getSiteOfMediumSizedNevi() {
        return siteOfMediumSizedNevi;
    }

    public void setSiteOfMediumSizedNevi(@Nullable String siteOfMediumSizedNevi) {
        this.siteOfMediumSizedNevi = siteOfMediumSizedNevi;
    }

    public boolean isPresenceOfLargeSizedNevi() {
        return presenceOfLargeSizedNevi;
    }

    public void setPresenceOfLargeSizedNevi(boolean presenceOfLargeSizedNevi) {
        this.presenceOfLargeSizedNevi = presenceOfLargeSizedNevi;
    }

    @Nullable
    public String getSiteOfLargeSizedNevi() {
        return siteOfLargeSizedNevi;
    }

    public void setSiteOfLargeSizedNevi(@Nullable String siteOfLargeSizedNevi) {
        this.siteOfLargeSizedNevi = siteOfLargeSizedNevi;
    }

    public boolean isPresenceOfGiantSizedNevi() {
        return presenceOfGiantSizedNevi;
    }

    public void setPresenceOfGiantSizedNevi(boolean presenceOfGiantSizedNevi) {
        this.presenceOfGiantSizedNevi = presenceOfGiantSizedNevi;
    }

    @Nullable
    public String getSiteOfGiantSizedNevi() {
        return siteOfGiantSizedNevi;
    }

    public void setSiteOfGiantSizedNevi(@Nullable String siteOfGiantSizedNevi) {
        this.siteOfGiantSizedNevi = siteOfGiantSizedNevi;
    }
}
