class SectionB2 {
  occupationalSunExposure: OccupationalSunExposure;
  recreationalSunExposure: RecreationalSunExposure;
  intermittentSunExposure: Map<string, IntermittentSunExposure>;
  mostRecentIntermittentSunExposure: string;
  severeSunBurns: Map<string, SevereSunBurns>;
  sunscreenUses: Map<string, SunscreenUse>;
  sunlampsSunbeds: SunlampsSunbeds;
  // sunProtectionOtherThanSunscreenUseHat: string; // Opt.
  // sunProtectionOtherThanSunscreenUseClothing: string; // Opt.
  // seekTheShadeDuringUVRHours: string; // Opt.
  // phototherapyUVBPUVA: string; // Opt.
  // TODO Mancano gli opzionali.

  constructor(form?) {
    if (form) {
      this.occupationalSunExposure = new OccupationalSunExposure(form.value.occupationalSunExposure);
      this.recreationalSunExposure = new RecreationalSunExposure(form.value.recreationalSunExposure);

      this.intermittentSunExposure = new Map<string, IntermittentSunExposure>();
      this.intermittentSunExposure.set(IntermittentSunExposure.KEY_CHILDHOOD,
        new IntermittentSunExposure(IntermittentSunExposure.KEY_CHILDHOOD, form.value.intermittentSunExposure.childhood));
      this.intermittentSunExposure.set(IntermittentSunExposure.KEY_ADOLESCENCE,
        new IntermittentSunExposure(IntermittentSunExposure.KEY_ADOLESCENCE, form.value.intermittentSunExposure.adolescence));
      this.intermittentSunExposure.set(IntermittentSunExposure.KEY_ADULTHOOD,
        new IntermittentSunExposure(IntermittentSunExposure.KEY_ADULTHOOD, form.value.intermittentSunExposure.adulthood));
      this.intermittentSunExposure.set(IntermittentSunExposure.KEY_TEN_YEARS,
        new IntermittentSunExposure(IntermittentSunExposure.KEY_TEN_YEARS, form.value.intermittentSunExposure.tenYears));

      this.mostRecentIntermittentSunExposure = form.value.mostRecentIntermittentSunExposure;

      this.severeSunBurns = new Map<string, SevereSunBurns>();
      this.severeSunBurns.set(SevereSunBurns.KEY_MINOR_18, new SevereSunBurns(SevereSunBurns.KEY_MINOR_18, form.value.severeSunBurns.minor18));
      this.severeSunBurns.set(SevereSunBurns.KEY_GREATER_18, new SevereSunBurns(SevereSunBurns.KEY_GREATER_18, form.value.severeSunBurns.greater18));
      this.severeSunBurns.set(SevereSunBurns.KEY_AT_SITE, new SevereSunBurns(SevereSunBurns.KEY_AT_SITE, form.value.severeSunBurns.atSite));
      this.severeSunBurns.set(SevereSunBurns.KEY_LAST_5, new SevereSunBurns(SevereSunBurns.KEY_LAST_5, form.value.severeSunBurns.last5));

      this.sunscreenUses = new Map<string, SunscreenUse>();
      this.sunscreenUses.set(SunscreenUse.KEY_CHILDHOOD, new SunscreenUse(SunscreenUse.KEY_CHILDHOOD, form.value.sunscreenUses.childhood));
      this.sunscreenUses.set(SunscreenUse.KEY_ADOLESCENCE, new SunscreenUse(SunscreenUse.KEY_ADOLESCENCE, form.value.sunscreenUses.adolescence));
      this.sunscreenUses.set(SunscreenUse.KEY_ADULTHOOD, new SunscreenUse(SunscreenUse.KEY_ADULTHOOD, form.value.sunscreenUses.adulthood));
      this.sunscreenUses.set(SunscreenUse.KEY_TEN_YEARS, new SunscreenUse(SunscreenUse.KEY_TEN_YEARS, form.value.sunscreenUses.tenYears));

      this.sunlampsSunbeds = new SunlampsSunbeds(form.value.sunlampsSunbeds);
    } else {
      this.occupationalSunExposure = new OccupationalSunExposure();
      this.recreationalSunExposure = new RecreationalSunExposure();

      this.intermittentSunExposure = new Map<string, IntermittentSunExposure>();
      this.intermittentSunExposure.set(IntermittentSunExposure.KEY_CHILDHOOD, new IntermittentSunExposure(IntermittentSunExposure.KEY_CHILDHOOD));
      this.intermittentSunExposure.set(IntermittentSunExposure.KEY_ADOLESCENCE, new IntermittentSunExposure(IntermittentSunExposure.KEY_ADOLESCENCE));
      this.intermittentSunExposure.set(IntermittentSunExposure.KEY_ADULTHOOD, new IntermittentSunExposure(IntermittentSunExposure.KEY_ADULTHOOD));
      this.intermittentSunExposure.set(IntermittentSunExposure.KEY_TEN_YEARS, new IntermittentSunExposure(IntermittentSunExposure.KEY_TEN_YEARS));

      this.mostRecentIntermittentSunExposure = '';

      this.severeSunBurns = new Map<string, SevereSunBurns>();
      this.severeSunBurns.set(SevereSunBurns.KEY_MINOR_18, new SevereSunBurns(SevereSunBurns.KEY_MINOR_18));
      this.severeSunBurns.set(SevereSunBurns.KEY_GREATER_18, new SevereSunBurns(SevereSunBurns.KEY_GREATER_18));
      this.severeSunBurns.set(SevereSunBurns.KEY_AT_SITE, new SevereSunBurns(SevereSunBurns.KEY_AT_SITE));
      this.severeSunBurns.set(SevereSunBurns.KEY_LAST_5, new SevereSunBurns(SevereSunBurns.KEY_LAST_5));

      this.sunscreenUses = new Map<string, SunscreenUse>();
      this.sunscreenUses.set(SunscreenUse.KEY_CHILDHOOD, new SunscreenUse(SunscreenUse.KEY_CHILDHOOD));
      this.sunscreenUses.set(SunscreenUse.KEY_ADOLESCENCE, new SunscreenUse(SunscreenUse.KEY_ADOLESCENCE));
      this.sunscreenUses.set(SunscreenUse.KEY_ADULTHOOD, new SunscreenUse(SunscreenUse.KEY_ADULTHOOD));
      this.sunscreenUses.set(SunscreenUse.KEY_TEN_YEARS, new SunscreenUse(SunscreenUse.KEY_TEN_YEARS));

      this.sunlampsSunbeds = new SunlampsSunbeds();

    }
  }
}

class OccupationalSunExposure {
  isTrue: boolean;
  occupation: string;
  hoursPerDay: string;
  daysPerMonth: string;
  monthsPerYear: string;
  years: string;

  constructor(form?) {
    if (form) {
      this.isTrue = form.value.occupationalSunExposure.isTrue;
      this.occupation = form.value.occupationalSunExposure.occupation;
      this.hoursPerDay = form.value.occupationalSunExposure.hoursPerDay;
      this.daysPerMonth = form.value.occupationalSunExposure.daysPerMonth;
      this.monthsPerYear = form.value.occupationalSunExposure.monthsPerYear;
      this.years = form.value.occupationalSunExposure.years;
    } else {
      this.isTrue = false;
      this.occupation = '';
      this.hoursPerDay = '';
      this.daysPerMonth = '';
      this.monthsPerYear = '';
      this.years = '';
    }
  }
}

class RecreationalSunExposure {
  isTrue: boolean;
  activity: string;
  hoursPerDay: string;
  daysPerMonth: string;
  monthsPerYear: string;
  years: string;

  constructor(form?) {
    if (form) {
      this.isTrue = form.value.recreationalSunExposure.isTrue;
      this.activity = form.value.recreationalSunExposure.activity;
      this.hoursPerDay = form.value.recreationalSunExposure.hoursPerDay;
      this.daysPerMonth = form.value.recreationalSunExposure.daysPerMonth;
      this.monthsPerYear = form.value.recreationalSunExposure.monthsPerYear;
      this.years = form.value.recreationalSunExposure.years;
    } else {
      this.isTrue = false;
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
      this.weeksOfVacation = form.value.intermittentSunExposure.agePeriod.weeksOfVacation;
      this.hoursSpentBetween11AMAnd4PM = form.value.intermittentSunExposure.agePeriod.hoursSpentBetween11AMAnd4PM;
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
      this.presence = form.value.severeSunBurns.period.presence;
      this.number = form.value.severeSunBurns.period.number;
    } else {
      this.period = period;
      this.presence = '';
      this.number = 0;
    }
  }

  // It can be: at age <18 yrs, at age ≥18 yrs, at site of melanoma, in the last 5 yrs
  period: string;
  // It can be: yes, no, not known
  presence: string;
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
      this.howOften = form.value.intermittentSunExposure.agePeriod.howOften;
      this.type = form.value.intermittentSunExposure.agePeriod.type;
    } else {
      this.agePeriod = agePeriod;
      this.howOften = '';
      this.type = '';
    }
  }
}

class SunlampsSunbeds {
  isTrue: boolean;
  lifetimeNumberOfSession: number;
  ageAtFirstExposure: number;
  ageAtLastExposure: number;

  constructor(form?) {
    if (form) {
      this.isTrue = form.value.sunlampsSunbeds.isTrue;
      this.lifetimeNumberOfSession = form.value.sunlampsSunbeds.lifetimeNumberOfSession;
      this.ageAtFirstExposure = form.value.sunlampsSunbeds.ageAtFirstExposure;
      this.ageAtLastExposure = form.value.sunlampsSunbeds.ageAtLastExposure;
    } else {
      this.isTrue = false;
      this.lifetimeNumberOfSession = 0;
      this.ageAtFirstExposure = 0;
      this.ageAtLastExposure = 0;
    }
  }
}

export { SectionB2, IntermittentSunExposure, SevereSunBurns, SunscreenUse };
