class SectionC2 {
  medicalDiagnoses: Array<MedicalDiagnosis>;
  previousAndConcomitantTreatments: Array<Treatment>;
  pregnancyHistory: PregnancyHistory;
  lifetimeHistoryOfNonMelanomaSkinCancer: {};
  nonCutaneousNeoplasias: NonCutaneousNeoplasia;

  constructor(form?, medicalDiagnoses?, treatments?) {
    if (form && medicalDiagnoses) {
      this.medicalDiagnoses = medicalDiagnoses;
      this.previousAndConcomitantTreatments = treatments;
      this.pregnancyHistory = new PregnancyHistory(form.value);

      this.lifetimeHistoryOfNonMelanomaSkinCancer = {};
      this.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC] = new NonMelanomaSkinCancer(NonMelanomaSkinCancer.KEY_BCC, form.value);
      this.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC] = new NonMelanomaSkinCancer(NonMelanomaSkinCancer.KEY_SCC, form.value);
      this.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC] = new NonMelanomaSkinCancer(NonMelanomaSkinCancer.KEY_IN_SITU_SCC, form.value);

      this.nonCutaneousNeoplasias = new NonCutaneousNeoplasia(form.value);
    } else {
      this.medicalDiagnoses = new Array<MedicalDiagnosis>();
      this.previousAndConcomitantTreatments = new Array<Treatment>();
      this.pregnancyHistory = new PregnancyHistory();

      this.lifetimeHistoryOfNonMelanomaSkinCancer = {};
      this.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC] = new NonMelanomaSkinCancer(NonMelanomaSkinCancer.KEY_BCC);
      this.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC] = new NonMelanomaSkinCancer(NonMelanomaSkinCancer.KEY_SCC);
      this.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC] = new NonMelanomaSkinCancer(NonMelanomaSkinCancer.KEY_IN_SITU_SCC);

      this.nonCutaneousNeoplasias = new NonCutaneousNeoplasia();
    }
  }
}

class MedicalDiagnosis {
  diagnosisName: string;
  icd10Code: string;

  constructor(form?) {
    if (form) {
      this.diagnosisName = form.value.diagnosisName;
      this.icd10Code = form.value.icd10Code;
    } else {
      this.diagnosisName = '';
      this.icd10Code = '';
    }
  }
}

class Treatment {
  treatmentName: string;
  treatmentStartingTime: string;
  treatmentEndingTime: string;

  constructor(form?) {
    if (form) {
      this.treatmentName = form.value.treatmentName;
      this.treatmentStartingTime = form.value.treatmentStartingTime;
      this.treatmentEndingTime = form.value.treatmentEndingTime;
    } else {
      this.treatmentName = '';
      this.treatmentStartingTime = '';
      this.treatmentEndingTime = '';
    }
  }
}

class PregnancyHistory {
  numberOfFullTermPregnancies: number;
  dateOfBirthOfChildren: string;
  numberOfMiscarriages: number;
  melanomaOccurDuringPregnancy: boolean;
  melanomaOccurBeforePregnancy: boolean;
  howManyYearsBeforePregnancy: string;
  melanomaOccurAfterPregnancy: boolean;
  howManyYearsAfterPregnancy: string;
  ivfbeforeDiagnosis: boolean;

  constructor(form?) {
    if (form) {
      this.numberOfFullTermPregnancies = form.numberOfFullTermPregnancies;
      this.dateOfBirthOfChildren = form.dateOfBirthOfChildren;
      this.numberOfMiscarriages = form.numberOfMiscarriages;
      this.melanomaOccurDuringPregnancy = form.melanomaOccurDuringPregnancy;
      this.melanomaOccurBeforePregnancy = form.melanomaOccurBeforePregnancy;
      this.howManyYearsBeforePregnancy = form.howManyYearsBeforePregnancy;
      this.melanomaOccurAfterPregnancy = form.melanomaOccurAfterPregnancy;
      this.howManyYearsAfterPregnancy = form.howManyYearsAfterPregnancy;
      this.ivfbeforeDiagnosis = form.ivfbeforeDiagnosis;
    } else {
      this.numberOfFullTermPregnancies = 0;
      this.dateOfBirthOfChildren = '';
      this.numberOfMiscarriages = 0;
      this.melanomaOccurDuringPregnancy = false;
      this.melanomaOccurBeforePregnancy = false;
      this.howManyYearsBeforePregnancy = '';
      this.melanomaOccurAfterPregnancy = false;
      this.howManyYearsAfterPregnancy = '';
      this.ivfbeforeDiagnosis = false;
    }
  }
}

class NonMelanomaSkinCancer {
  public static KEY_BCC = 'bcc';
  public static KEY_SCC = 'scc';
  public static KEY_IN_SITU_SCC = 'in_scc';

  type: string;
  number: number;
  when: string;
  site: string;
  dateOfDiagnosis: string;

  constructor(key: string, form?) {
    if (form) {
      switch (key) {
        case NonMelanomaSkinCancer.KEY_BCC:
          this.number = form.numberBcc;
          this.when = form.whenBcc;
          this.site = form.siteBcc;
          this.dateOfDiagnosis = form.dateOfDiagnosisBcc;
          break;
        case NonMelanomaSkinCancer.KEY_SCC:
          this.number = form.numberScc;
          this.when = form.whenScc;
          this.site = form.siteScc;
          this.dateOfDiagnosis = form.dateOfDiagnosisScc;
          break;
        case NonMelanomaSkinCancer.KEY_IN_SITU_SCC:
          this.type = form.typeInScc;
          this.number = form.numberInScc;
          this.when = form.whenInScc;
          this.site = form.siteInScc;
          this.dateOfDiagnosis = form.dateOfDiagnosisInScc;
          break;
      }
    } else {
      this.type = '';
      this.number = 0;
      this.when = '';
      this.site = '';
      this.dateOfDiagnosis = '';
    }
  }
}

class NonCutaneousNeoplasia {
  type: string;
  ageOfDiagnosis: string;
  yearOfDiagnoses: string;

  constructor(form?) {
    if (form) {
      this.type = form.typeNonCutaneous;
      this.ageOfDiagnosis = form.ageOfDiagnosis;
      this.yearOfDiagnoses = form.yearOfDiagnoses;
    } else {
      this.type = '';
      this.ageOfDiagnosis = '';
      this.yearOfDiagnoses = '';
    }
  }
}

export { SectionC2, NonMelanomaSkinCancer, MedicalDiagnosis, PregnancyHistory, Treatment };
