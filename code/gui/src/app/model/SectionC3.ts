export class SectionC3 {
  familyHistoryOfMelanomaList: FamilyHistory;
  germlineStatus: string;
  familyHistoryOfOtherCancer: FamilyHistory;

  constructor(form?) {
    if (form) {
      this.familyHistoryOfMelanomaList = new FamilyHistory(form);
      this.germlineStatus = form.value.germlineStatus;
      this.familyHistoryOfOtherCancer = new FamilyHistory(form);
    } else {
      this.familyHistoryOfMelanomaList = new FamilyHistory();
      this.germlineStatus = '';
      this.familyHistoryOfOtherCancer = new FamilyHistory();
    }
  }
}

class FamilyHistory {
  presence: string;
  other: '';
  type: string;
  sideOfAffectedRelative: string;
  degreeOfRelative: string;
  ageAtDiagnosis: string;

  constructor(form?) {
    if (form) {
      this.presence = form.value.presenceMelanomaRelatives;
      this.other = form.value.specifyOtherPresence;
      this.type = form.value.relativesMelanomaType;
      this.sideOfAffectedRelative = form.value.relativeSide;
      this.degreeOfRelative = form.value.relativeDegree;
      this.ageAtDiagnosis = form.value.ageAtDiagnosis;
    } else {
      this.presence = '';
      this.other = '';
      this.type = '';
      this.sideOfAffectedRelative = '';
      this.degreeOfRelative = '';
      this.ageAtDiagnosis = '';
    }
  }
}
