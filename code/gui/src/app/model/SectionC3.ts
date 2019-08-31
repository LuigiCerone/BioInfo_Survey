class SectionC3 {
  presenceFamilyHistoryOfMelanomaList: string;
  familyHistoryOfMelanomaList: Array<FamilyHistory>;
  germlineStatus: string;
  presenceFamilyHistoryOfOtherCancer: string;
  familyHistoryOfOtherCancer: Array<FamilyHistory>;

  constructor(form?, list1?, list2?) {
    if (form && list1 && list2) {
      this.presenceFamilyHistoryOfMelanomaList = form.value.presenceMelanoma;
      this.familyHistoryOfMelanomaList = list1;
      this.germlineStatus = form.value.germlineStatus;
      this.presenceFamilyHistoryOfOtherCancer = form.value.presenceCancer;
      this.familyHistoryOfOtherCancer = list2;
    } else {
      this.presenceFamilyHistoryOfMelanomaList = '';
      this.familyHistoryOfMelanomaList = new Array<FamilyHistory>();
      this.germlineStatus = '';
      this.presenceFamilyHistoryOfOtherCancer = '';
      this.familyHistoryOfOtherCancer = new Array<FamilyHistory>();
    }
  }
}

class FamilyHistory {
  type: string;
  sideOfAffectedRelative: string;
  degreeOfRelative: string;
  ageAtDiagnosis: string;

  constructor(fieldType: string, form?) {
    if (form && fieldType === 'M')  {
      this.type = form.value.typeMelanoma;
      this.sideOfAffectedRelative = form.value.sideOfAffectedRelativeMelanoma;
      this.degreeOfRelative = form.value.degreeOfRelativeMelanoma;
      this.ageAtDiagnosis = form.value.ageAtDiagnosisMelanoma;
    } else if  (form && fieldType === 'C')  {
      this.type = form.value.otherCancer;
      this.sideOfAffectedRelative = form.value.sideOfAffectedRelativeCancer;
      this.degreeOfRelative = form.value.degreeOfRelativeCancer;
      this.ageAtDiagnosis = form.value.ageAtDiagnosisCancer;
    } else {
      this.type = '';
      this.sideOfAffectedRelative = '';
      this.degreeOfRelative = '';
      this.ageAtDiagnosis = '';
    }
  }
}

export { SectionC3, FamilyHistory };
