import {FormsModule} from "@angular/forms";

export class SectionC3 {
  familyHistoryOfMelanomaList: FamilyHistory;
  germlineStatus: string;
  familyHistoryOfOtherCancer: FamilyHistory;

  constructor(form?) {
    if (form) {
      this.familyHistoryOfMelanomaList = new FamilyHistory(form.value.familyHistoryOfMelanomaList);
      this.germlineStatus = form.value.germlineStatus;
      this.familyHistoryOfOtherCancer = new FamilyHistory(form.value.familyHistoryOfOtherCancer);
    } else {
      this.familyHistoryOfMelanomaList = new FamilyHistory();
      this.germlineStatus = '';
      this.familyHistoryOfOtherCancer = new FamilyHistory();
    }
  }
}

class FamilyHistory {
  presence: string;
  type: string;
  sideOfAffectedRelative: string;
  degreeOfRelative: string;
  ageAtDiagnosis: string;

  constructor(form?) {
    if (form) {
      this.presence = form.value.familyHistory.presence;
      this.type = form.value.familyHistory.type;
      this.sideOfAffectedRelative = form.value.familyHistory.sideOfAffectedRelative;
      this.degreeOfRelative = form.value.familyHistory.degreeOfRelative;
      this.ageAtDiagnosis = form.value.familyHistory.ageAtDiagnosis;
    } else {
      this.presence = '';
      this.type = '';
      this.sideOfAffectedRelative = '';
      this.degreeOfRelative = '';
      this.ageAtDiagnosis = '';
    }
  }
}
