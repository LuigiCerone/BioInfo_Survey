package com.univaq.disim.bioinfo.model.section;

import com.univaq.disim.bioinfo.model.nested.FamilyHistory;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

public class C3 {
    //TODO: check if it can be more than one (in this case the list is ok) or is only one potential relative(in this case
    // a simple variable is sufficient possono esserci più di una storia
    @Field
    private List<FamilyHistory> familyHistoryOfMelanomaList;

    // It can be: Not tested, CDKN2A, CDK4, BAP-1, MC1R, TERT, MITF, POT1, Other
    //TODO: Optional
    @Field
    private String germlineStatus;

    @Field
    private List<FamilyHistory> familyHistoryOfOtherCancer;


    public C3(){ }

    public List<FamilyHistory> getFamilyHistoryOfMelanomaList() {
        return familyHistoryOfMelanomaList;
    }

    public void setFamilyHistoryOfMelanomaList(List<FamilyHistory> familyHistoryOfMelanomaList) {
        this.familyHistoryOfMelanomaList = familyHistoryOfMelanomaList;
    }

    public String getGermlineStatus() {
        return germlineStatus;
    }

    public void setGermlineStatus(String germlineStatus) {
        this.germlineStatus = germlineStatus;
    }

    public List<FamilyHistory> getFamilyHistoryOfOtherCancer() {
        return familyHistoryOfOtherCancer;
    }

    public void setFamilyHistoryOfOtherCancer(List<FamilyHistory> familyHistoryOfOtherCancer) {
        this.familyHistoryOfOtherCancer = familyHistoryOfOtherCancer;
    }
}
