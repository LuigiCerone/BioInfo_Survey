class SectionC3 {
  familyHistoryOfMelanomaList: Array<FamilyHistory>;
  germlineStatus: string;
  familyHistoryOfOtherCancer: FamilyHistory;

  constructor(form?) {
    if (form) {
      this.familyHistoryOfMelanomaList = new Array<FamilyHistory>();
      this.familyHistoryOfMelanomaList.push(new FamilyHistory('M', form));
      this.germlineStatus = form.value.germlineStatus;
      this.familyHistoryOfOtherCancer = new FamilyHistory('C', form);
    } else {
      this.familyHistoryOfMelanomaList = new Array<FamilyHistory>();
      this.familyHistoryOfMelanomaList.push(new FamilyHistory('M'));
      this.germlineStatus = '';
      this.familyHistoryOfOtherCancer = new FamilyHistory('C');
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

  constructor(fieldType: string, form?) {
    if (form && fieldType === 'M')  {
      this.presence = form.value.presenceMelanoma;
      this.other = form.value.otherMelanoma;
      this.type = form.value.typeMelanoma;
      this.sideOfAffectedRelative = form.value.sideOfAffectedRelativeMelanoma;
      this.degreeOfRelative = form.value.degreeOfRelativeMelanoma;
      this.ageAtDiagnosis = form.value.ageAtDiagnosisMelanoma;
    } else if  (form && fieldType === 'C')  {
      this.presence = form.value.presenceCancer;
      this.other = form.value.typeCancer;
      this.type = form.value.otherCancer;
      this.sideOfAffectedRelative = form.value.sideOfAffectedRelativeCancer;
      this.degreeOfRelative = form.value.degreeOfRelativeCancer;
      this.ageAtDiagnosis = form.value.ageAtDiagnosisCancer;
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

export { SectionC3, FamilyHistory };
