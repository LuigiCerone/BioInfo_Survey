class SectionB2 {
  occupationalSunExposure: OccupationalSunExposure;
  recreationalSunExposure: RecreationalSunExposure;
  intermittentSunExposure: object;
  mostRecentIntermittentSunExposure: string;
  severeSunBurns: object;
  sunscreenUses: object;
  sunlampsSunbeds: SunlampsSunbeds;
  // sunProtectionOtherThanSunscreenUseHat: string; // Opt.
  // sunProtectionOtherThanSunscreenUseClothing: string; // Opt.
  // seekTheShadeDuringUVRHours: string; // Opt.
  // phototherapyUVBPUVA: string; // Opt.
  // TODO Mancano gli opzionali.

  constructor(form?) {
    if (form) {
      this.occupationalSunExposure = new OccupationalSunExposure(form.value);
      this.recreationalSunExposure = new RecreationalSunExposure(form.value.recreationalSunExposure);

      this.intermittentSunExposure = {};
      this.intermittentSunExposure[IntermittentSunExposure.KEY_CHILDHOOD] = new IntermittentSunExposure(IntermittentSunExposure.KEY_CHILDHOOD, form.value);
      this.intermittentSunExposure[IntermittentSunExposure.KEY_ADOLESCENCE] = new IntermittentSunExposure(IntermittentSunExposure.KEY_ADOLESCENCE, form.value);
      this.intermittentSunExposure[IntermittentSunExposure.KEY_ADULTHOOD] = new IntermittentSunExposure(IntermittentSunExposure.KEY_ADULTHOOD, form.value);
      this.intermittentSunExposure[IntermittentSunExposure.KEY_TEN_YEARS] = new IntermittentSunExposure(IntermittentSunExposure.KEY_TEN_YEARS, form.value);

      this.mostRecentIntermittentSunExposure = form.value.lastIntenseExposure;

      this.severeSunBurns = {};
      this.severeSunBurns[SevereSunBurns.KEY_MINOR_18] = new SevereSunBurns(SevereSunBurns.KEY_MINOR_18, form.value);
      this.severeSunBurns[SevereSunBurns.KEY_GREATER_18] = new SevereSunBurns(SevereSunBurns.KEY_GREATER_18, form.value);
      this.severeSunBurns[SevereSunBurns.KEY_AT_SITE] = new SevereSunBurns(SevereSunBurns.KEY_AT_SITE, form.value);
      this.severeSunBurns[SevereSunBurns.KEY_LAST_5] = new SevereSunBurns(SevereSunBurns.KEY_LAST_5, form.value);

      this.sunscreenUses = {};
      this.sunscreenUses[SunscreenUse.KEY_CHILDHOOD] = new SunscreenUse(SunscreenUse.KEY_CHILDHOOD, form.value);
      this.sunscreenUses[SunscreenUse.KEY_ADOLESCENCE] = new SunscreenUse(SunscreenUse.KEY_ADOLESCENCE, form.value);
      this.sunscreenUses[SunscreenUse.KEY_ADULTHOOD] = new SunscreenUse(SunscreenUse.KEY_ADULTHOOD, form.value);
      this.sunscreenUses[SunscreenUse.KEY_TEN_YEARS] = new SunscreenUse(SunscreenUse.KEY_TEN_YEARS, form.value);

      this.sunlampsSunbeds = new SunlampsSunbeds(form.value);
    } else {
      this.occupationalSunExposure = new OccupationalSunExposure();
      this.recreationalSunExposure = new RecreationalSunExposure();

      this.intermittentSunExposure = {};
      this.intermittentSunExposure[IntermittentSunExposure.KEY_CHILDHOOD] = new IntermittentSunExposure(IntermittentSunExposure.KEY_CHILDHOOD);
      this.intermittentSunExposure[IntermittentSunExposure.KEY_ADOLESCENCE] = new IntermittentSunExposure(IntermittentSunExposure.KEY_ADOLESCENCE);
      this.intermittentSunExposure[IntermittentSunExposure.KEY_ADULTHOOD] = new IntermittentSunExposure(IntermittentSunExposure.KEY_ADULTHOOD);
      this.intermittentSunExposure[IntermittentSunExposure.KEY_TEN_YEARS] = new IntermittentSunExposure(IntermittentSunExposure.KEY_TEN_YEARS);

      this.mostRecentIntermittentSunExposure = '';

      this.severeSunBurns = {};
      this.severeSunBurns[SevereSunBurns.KEY_MINOR_18] = new SevereSunBurns(SevereSunBurns.KEY_MINOR_18);
      this.severeSunBurns[SevereSunBurns.KEY_GREATER_18] = new SevereSunBurns(SevereSunBurns.KEY_GREATER_18);
      this.severeSunBurns[SevereSunBurns.KEY_AT_SITE] = new SevereSunBurns(SevereSunBurns.KEY_AT_SITE);
      this.severeSunBurns[SevereSunBurns.KEY_LAST_5] = new SevereSunBurns(SevereSunBurns.KEY_LAST_5);

      this.sunscreenUses = {};
      this.sunscreenUses[SunscreenUse.KEY_CHILDHOOD] = new SunscreenUse(SunscreenUse.KEY_CHILDHOOD);
      this.sunscreenUses[SunscreenUse.KEY_ADOLESCENCE] = new SunscreenUse(SunscreenUse.KEY_ADOLESCENCE);
      this.sunscreenUses[SunscreenUse.KEY_ADULTHOOD] = new SunscreenUse(SunscreenUse.KEY_ADULTHOOD);
      this.sunscreenUses[SunscreenUse.KEY_TEN_YEARS] = new SunscreenUse(SunscreenUse.KEY_TEN_YEARS);

      this.sunlampsSunbeds = new SunlampsSunbeds();

    }
  }
}

class OccupationalSunExposure {
  true: boolean;
  occupation: string;
  hoursPerDay: string;
  daysPerMonth: string;
  monthsPerYear: string;
  years: string;

  constructor(form?) {
    if (form) {
      this.true = form.occupationalSunExposure;
      this.occupation = form.occupationalSunExposureType;
      this.hoursPerDay = form.occupationalSunExposureHours;
      this.daysPerMonth = form.occupationalSunExposureDays;
      this.monthsPerYear = form.occupationalSunExposureMonths;
      this.years = form.occupationalSunExposureYears;
    } else {
      this.true = false;
      this.occupation = '';
      this.hoursPerDay = '';
      this.daysPerMonth = '';
      this.monthsPerYear = '';
      this.years = '';
    }
  }
}

class RecreationalSunExposure {
  true: boolean;
  activity: string;
  hoursPerDay: string;
  daysPerMonth: string;
  monthsPerYear: string;
  years: string;

  constructor(form?) {
    if (form) {
      this.true = form.recreationalSunExposure;
      this.activity = form.recreationalSunExposureType;
      this.hoursPerDay = form.recreationalSunExposureHours;
      this.daysPerMonth = form.recreationalSunExposureDays;
      this.monthsPerYear = form.recreationalSunExposureMonths;
      this.years = form.recreationalSunExposureYears;
    } else {
      this.true = false;
      this.activity = '';
      this.hoursPerDay = '';
      this.daysPerMonth = '';
      this.monthsPerYear = '';
      this.years = '';
    }
  }
}

class IntermittentSunExposure {
  public static KEY_CHILDHOOD = 'childhood';
  public static KEY_ADOLESCENCE = 'adolescence';
  public static KEY_ADULTHOOD = 'adulthood';
  public static KEY_TEN_YEARS = 'tenYears';

  agePeriod: string;
  weeksOfVacation: string;
  hoursSpentBetween11AMAnd4PM: string;

  constructor(agePeriod: string, form?) {
    if (form) {
      this.agePeriod = agePeriod;
      switch (agePeriod) {
        case IntermittentSunExposure.KEY_CHILDHOOD:
          this.weeksOfVacation = form.intermittentExposureChildhoodWeeks;
          this.hoursSpentBetween11AMAnd4PM = form.intermittentExposureChildhoodHours;
          break;
        case IntermittentSunExposure.KEY_ADOLESCENCE:
          this.weeksOfVacation = form.intermittentExposureAdolescenceWeeks;
          this.hoursSpentBetween11AMAnd4PM = form.intermittentExposureAdolescenceHours;
          break;
        case IntermittentSunExposure.KEY_ADULTHOOD:
          this.weeksOfVacation = form.intermittentExposureAdulthoodWeeks;
          this.hoursSpentBetween11AMAnd4PM = form.intermittentExposureAdulthoodHours;
          break;
        case IntermittentSunExposure.KEY_TEN_YEARS:
          this.weeksOfVacation = form.intermittentExposureDiagnosisWeeks;
          this.hoursSpentBetween11AMAnd4PM = form.intermittentExposureDiagnosisHours;
          break;
      }
    } else {
      this.agePeriod = agePeriod;
      this.weeksOfVacation = '';
      this.hoursSpentBetween11AMAnd4PM = '';
    }
  }
}

class SevereSunBurns {
  public static KEY_MINOR_18 = 'minor18';
  public static KEY_GREATER_18 = 'greater18';
  public static KEY_AT_SITE = 'atSite';
  public static KEY_LAST_5 = 'last5';

  constructor(period: string, form?) {
    if (form) {
      this.period = period;
      switch (period) {
        case SevereSunBurns.KEY_MINOR_18:
          this.presence = form.sunburnsLess18;
          this.number = form.less18SunburnsNumber;
          break;
        case SevereSunBurns.KEY_GREATER_18:
          this.presence = form.sunburnsGreater18;
          this.number = form.greater18SunburnsNumber;
          break;
        case SevereSunBurns.KEY_AT_SITE:
          this.presence = form.sunburnsMelanomaSite;
          this.number = 0;
          break;
        case SevereSunBurns.KEY_LAST_5:
          this.presence = form.sunburnsLast5;
          this.number = form.last5SunburnsNumber;
          break;
      }
    } else {
      this.period = period;
      this.presence = 0;
      this.number = 0;
    }
  }

  // It can be: at age <18 yrs, at age ≥18 yrs, at site of melanoma, in the last 5 yrs
  period: string;
  // It can be: yes, no, not known
  presence: number;
  // Number of sun burns
  number: number;
}

class SunscreenUse {
  public static KEY_CHILDHOOD = 'childhood';
  public static KEY_ADOLESCENCE = 'adolescence';
  public static KEY_ADULTHOOD = 'adulthood';
  public static KEY_TEN_YEARS = 'tenYears';

  // It can be childhood, adolescence, adulthood or 10 years before melanoma diagnosis (for cases) or last 10 years (for controls)
  agePeriod: string;
  // It can be Never, <50% of time exposure, >50% of time exposure, Always, Not known
  howOften: string;
  // It can be SPF<20, SPF>20, Not known
  type: string;

  constructor(agePeriod: string, form?) {
    if (form) {
      this.agePeriod = agePeriod;
      switch (agePeriod) {
        case SunscreenUse.KEY_CHILDHOOD:
          this.howOften = form.sunscreenPercentageChildhood;
          this.type = form.sunscreenTypeChildhood;
          break;
        case SunscreenUse.KEY_ADOLESCENCE:
          this.howOften = form.sunscreenPercentageAdolescence;
          this.type = form.sunscreenTypeAdolescence;
          break;
        case SunscreenUse.KEY_ADULTHOOD:
          this.howOften = form.sunscreenPercentageAdulthood;
          this.type = form.sunscreenTypeAdulthood;
          break;
        case SunscreenUse.KEY_TEN_YEARS:
          this.howOften = form.sunscreenPercentageMelanoma;
          this.type = form.sunscreenTypeMelanoma;
          break;
      }
    } else {
      this.agePeriod = agePeriod;
      this.howOften = '';
      this.type = '';
    }
  }
}

class SunlampsSunbeds {
  true: boolean;
  lifetimeNumberOfSession: number;
  ageAtFirstExposure: number;
  ageAtLastExposure: number;

  constructor(form?) {
    if (form) {
      this.true = form.sunlamps;
      this.lifetimeNumberOfSession = form.numberSunlamps;
      this.ageAtFirstExposure = form.ageFirstSunlamps;
      this.ageAtLastExposure = form.ageLastSunlamps;
    } else {
      this.true = false;
      this.lifetimeNumberOfSession = 0;
      this.ageAtFirstExposure = 0;
      this.ageAtLastExposure = 0;
    }
  }
}

export { SectionB2, IntermittentSunExposure, SevereSunBurns, SunscreenUse };
