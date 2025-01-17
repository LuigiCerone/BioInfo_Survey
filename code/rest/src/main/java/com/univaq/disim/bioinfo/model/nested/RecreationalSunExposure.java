package com.univaq.disim.bioinfo.model.nested;

public class RecreationalSunExposure {
    private boolean isTrue;

    private String activity;

    private String hoursPerDay;

    private String daysPerMonth;

    private String monthsPerYear;

    private String years;

    public RecreationalSunExposure(){ }

    public boolean isTrue() {
        return isTrue;
    }

    public void setTrue(boolean aTrue) {
        isTrue = aTrue;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public String getHoursPerDay() {
        return hoursPerDay;
    }

    public void setHoursPerDay(String hoursPerDay) {
        this.hoursPerDay = hoursPerDay;
    }

    public String getDaysPerMonth() {
        return daysPerMonth;
    }

    public void setDaysPerMonth(String daysPerMonth) {
        this.daysPerMonth = daysPerMonth;
    }

    public String getMonthsPerYear() {
        return monthsPerYear;
    }

    public void setMonthsPerYear(String monthsPerYear) {
        this.monthsPerYear = monthsPerYear;
    }

    public String getYears() {
        return years;
    }

    public void setYears(String years) {
        this.years = years;
    }
}
