export class SectionC2 {
  medicalDiagnoses: MedicalDiagnosis;
  previousAndConcomitantTreatments: Treatment;
  pregnancyHistory: PregnancyHistory;
  lifetimeHistoryOfNonMelanomaSkinCancer: NonMelanomaSkinCancer;
  nonCutaneousNeoplasias: NonCutaneousNeoplasia;

  constructor(form?) {
    if (form) {
      this.medicalDiagnoses = new MedicalDiagnosis(form.value.medicalDiagnoses);
      this.previousAndConcomitantTreatments = new Treatment(form.value.previousAndConcomitantTreatments);
      this.pregnancyHistory = new PregnancyHistory(form.value.pregnancyHistory);
      this.lifetimeHistoryOfNonMelanomaSkinCancer = new NonMelanomaSkinCancer(form.value.lifetimeHistoryOfNonMelanomaSkinCancer);
      this.nonCutaneousNeoplasias = new NonCutaneousNeoplasia(form.value.nonCutaneousNeoplasias);
    } else {
      this.medicalDiagnoses = new MedicalDiagnosis();
      this.previousAndConcomitantTreatments = new Treatment();
      this.pregnancyHistory = new PregnancyHistory();
      this.lifetimeHistoryOfNonMelanomaSkinCancer = new NonMelanomaSkinCancer();
      this.nonCutaneousNeoplasias = new NonCutaneousNeoplasia();
    }
  }
}

class MedicalDiagnosis {
  diagnosisName: string;
  ICD10Code: string;

  constructor(form?) {
    if (form) {
      this.diagnosisName = form.value.medicalDiagnoses.diagnosisName;
      this.ICD10Code = form.value.medicalDiagnoses.ICD10Code;
    } else {
      this.diagnosisName = '';
      this.ICD10Code = '';
    }
  }
}

class Treatment {
  treatmentName: string;
  treatmentStartingTime: string;
  treatmentEndingTime: string;

  constructor(form?) {
    if (form) {
      this.treatmentName = form.value.treatment.treatmentName;
      this.treatmentStartingTime = form.value.treatment.treatmentStartingTime;
      this.treatmentEndingTime = form.value.treatment.treatmentEndingTime;
    } else {
      this.treatmentName = '';
      this.treatmentStartingTime = '';
      this.treatmentEndingTime = '';
    }
  }
}

class PregnancyHistory {
  numberOfFullTermPregnancies: number;
  dateOfBirthOfChildren: string[];
  numberOfMiscarriages: number;
  melanomaOccurDuringPregnancy: boolean;
  melanomaOccurBeforePregnancy: boolean;
  howManyYearsBeforePregnancy: string;
  melanomaOccurAfterPregnancy: boolean;
  howManyYearsAfterPregnancy: string;
  IVFBeforeDiagnosis: boolean;

  constructor(form?) {
    if (form) {
      this.numberOfFullTermPregnancies = form.value.pregnancyHistory.numberOfFullTermPregnancies;
      this.dateOfBirthOfChildren = form.value.pregnancyHistory.dateOfBirthOfChildren;
      this.numberOfMiscarriages = form.value.pregnancyHistory.numberOfMiscarriages;
      this.melanomaOccurDuringPregnancy = form.value.pregnancyHistory.melanomaOccurDuringPregnancy;
      this.melanomaOccurBeforePregnancy = form.value.pregnancyHistory.melanomaOccurBeforePregnancy;
      this.howManyYearsBeforePregnancy = form.value.pregnancyHistory.howManyYearsBeforePregnancy;
      this.melanomaOccurAfterPregnancy = form.value.pregnancyHistory.melanomaOccurAfterPregnancy;
      this.howManyYearsAfterPregnancy = form.value.pregnancyHistory.howManyYearsAfterPregnancy;
      this.IVFBeforeDiagnosis = form.value.pregnancyHistory.IVFBeforeDiagnosis;
    } else {
      this.numberOfFullTermPregnancies = 0;
      this.dateOfBirthOfChildren = [];
      this.numberOfMiscarriages = 0;
      this.melanomaOccurDuringPregnancy = false;
      this.melanomaOccurBeforePregnancy = false;
      this.howManyYearsBeforePregnancy = '';
      this.melanomaOccurAfterPregnancy = false;
      this.howManyYearsAfterPregnancy = '';
      this.IVFBeforeDiagnosis = false;
    }
  }
}

class NonMelanomaSkinCancer {
  type: string;
  number: number;
  when: string;
  site: string;
  dateOfDiagnosis: string;

  constructor(form?) {
    if (form) {
      this.type = form.value.nonMelanomaSkinCancer.type;
      this.number = form.value.nonMelanomaSkinCancer.number;
      this.when = form.value.nonMelanomaSkinCancer.when;
      this.site = form.value.nonMelanomaSkinCancer.site;
      this.dateOfDiagnosis = form.value.nonMelanomaSkinCancer.dateOfDiagnosis;
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
      this.type = form.value.nonCutaneousNeoplasia.type;
      this.ageOfDiagnosis = form.value.nonCutaneousNeoplasia.ageOfDiagnosis;
      this.yearOfDiagnoses = form.value.nonCutaneousNeoplasia.yearOfDiagnoses;
    } else {
      this.type = '';
      this.ageOfDiagnosis = '';
      this.yearOfDiagnoses = '';
    }
  }
}
