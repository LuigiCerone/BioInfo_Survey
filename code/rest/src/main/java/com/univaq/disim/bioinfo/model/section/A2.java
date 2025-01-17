package com.univaq.disim.bioinfo.model.section;

import com.mongodb.lang.Nullable;
import com.univaq.disim.bioinfo.model.nested.Occupation;
import com.univaq.disim.bioinfo.model.nested.Residency;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.Null;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

public class A2 {

    @Field
    private String sex;

    @Field
    private Long dateOfBirth;

    @Field
    private String cityOfBirth;

    @Field
    private String provinceOfBirth;

    @Field
    private String countryOfBirth;

    //TODO: weight must be checked every 12 months
    @Field
    private String weight;

    //TODO: height must be checked every 12 months
    @Field
    private String height;

    @Field
    private String ethnicity;

    @Field
    @Nullable
    private String otherEthnicity;

    @Field
    private String cityOfResidence;

    @Field
    private String provinceOfResidence;

    @Field
    private String countryOfResidence;

    @Field
    private String education;

    @Field
    private String currentOccupationalStatus;

    @Nullable
    @Field
    private List<Occupation> historyOfOccupations;

    public A2(){ }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getDateOfBirth() {
        return new SimpleDateFormat("dd/MMM/yyyy").format(this.dateOfBirth);
    }

    public void setDateOfBirth(String dateOfBirth) {
        Long millis = null;
        try {
            millis = new SimpleDateFormat("dd/MMM/yyyy").parse(dateOfBirth).getTime();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        this.dateOfBirth = millis;
    }

    public String getCityOfBirth() {
        return cityOfBirth;
    }

    public void setCityOfBirth(String cityOfBirth) {
        this.cityOfBirth = cityOfBirth;
    }

    public String getProvinceOfBirth() {
        return provinceOfBirth;
    }

    public void setProvinceOfBirth(String provinceOfBirth) {
        this.provinceOfBirth = provinceOfBirth;
    }

    public String getCountryOfBirth() {
        return countryOfBirth;
    }

    public void setCountryOfBirth(String countryOfBirth) {
        this.countryOfBirth = countryOfBirth;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getEthnicity() {
        return ethnicity;
    }

    public void setEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
    }

    public String getCityOfResidence() {
        return cityOfResidence;
    }

    public void setCityOfResidence(String cityOfResidence) {
        this.cityOfResidence = cityOfResidence;
    }

    public String getProvinceOfResidence() {
        return provinceOfResidence;
    }

    public void setProvinceOfResidence(String provinceOfResidence) {
        this.provinceOfResidence = provinceOfResidence;
    }

    public String getCountryOfResidence() {
        return countryOfResidence;
    }

    public void setCountryOfResidence(String countryOfResidence) {
        this.countryOfResidence = countryOfResidence;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getCurrentOccupationalStatus() {
        return currentOccupationalStatus;
    }

    public void setCurrentOccupationalStatus(String currentOccupationalStatus) {
        this.currentOccupationalStatus = currentOccupationalStatus;
    }

    public List<Occupation> getHistoryOfOccupations() {
        return historyOfOccupations;
    }

    public void setHistoryOfOccupations(List<Occupation> historyOfOccupations) {
        this.historyOfOccupations = historyOfOccupations;
    }

    @Nullable
    public String getOtherEthnicity() {
        return otherEthnicity;
    }

    public void setOtherEthnicity(@Nullable String otherEthnicity) {
        this.otherEthnicity = otherEthnicity;
    }
}
