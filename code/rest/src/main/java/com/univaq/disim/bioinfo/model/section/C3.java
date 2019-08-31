package com.univaq.disim.bioinfo.model.section;

import com.univaq.disim.bioinfo.model.nested.FamilyHistory;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

public class C3 {

    @Field
    private String presenceFamilyHistoryOfMelanomaList;

    //TODO: check if it can be more than one (in this case the list is ok) or is only one potential relative(in this case
    // a simple variable is sufficient possono esserci più di una storia
    @Field
    private ArrayList<FamilyHistory> familyHistoryOfMelanomaList;

    // It can be: Not tested, CDKN2A, CDK4, BAP-1, MC1R, TERT, MITF, POT1, Other
    //TODO: Optional
    @Field
    private String germlineStatus;

    @Field
    private String presenceFamilyHistoryOfOtherCancer;

    @Field
    private ArrayList<FamilyHistory> familyHistoryOfOtherCancer;


    public C3(){ }

    public String getPresenceFamilyHistoryOfMelanomaList() {
        return presenceFamilyHistoryOfMelanomaList;
    }

    public void setPresenceFamilyHistoryOfMelanomaList(String presenceFamilyHistoryOfMelanomaList) {
        this.presenceFamilyHistoryOfMelanomaList = presenceFamilyHistoryOfMelanomaList;
    }

    public ArrayList<FamilyHistory> getFamilyHistoryOfMelanomaList() {
        return familyHistoryOfMelanomaList;
    }

    public void setFamilyHistoryOfMelanomaList(ArrayList<FamilyHistory> familyHistoryOfMelanomaList) {
        this.familyHistoryOfMelanomaList = familyHistoryOfMelanomaList;
    }

    public String getGermlineStatus() {
        return germlineStatus;
    }

    public void setGermlineStatus(String germlineStatus) {
        this.germlineStatus = germlineStatus;
    }

    public String getPresenceFamilyHistoryOfOtherCancer() {
        return presenceFamilyHistoryOfOtherCancer;
    }

    public void setPresenceFamilyHistoryOfOtherCancer(String presenceFamilyHistoryOfOtherCancer) {
        this.presenceFamilyHistoryOfOtherCancer = presenceFamilyHistoryOfOtherCancer;
    }

    public ArrayList<FamilyHistory> getFamilyHistoryOfOtherCancer() {
        return familyHistoryOfOtherCancer;
    }

    public void setFamilyHistoryOfOtherCancer(ArrayList<FamilyHistory> familyHistoryOfOtherCancer) {
        this.familyHistoryOfOtherCancer = familyHistoryOfOtherCancer;
    }
}
