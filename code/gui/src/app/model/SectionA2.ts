class SectionA2 {
  sex: string;
  dateOfBirth: string;
  cityOfBirth: string;
  provinceOfBirth: string;
  countryOfBirth: string;
  weight: string;
  height: string;
  ethnicity: string;
  otherEthnicity: string;
  cityOfResidence: string;
  provinceOfResidence: string;
  countryOfResidence: string;
  education: string;
  currentOccupationalStatus: string;
  // TODO Handle this field.
  historyOfOccupations: Array<Occupation>;

  constructor(form?, history?) {
    if (form && history) {
      this.sex = form.value.sex;
      this.dateOfBirth = form.value.dateOfBirth;
      this.cityOfBirth = form.value.cityOfBirth;
      this.provinceOfBirth = form.value.provinceOfBirth;
      this.countryOfBirth = form.value.countryOfBirth;
      this.weight = form.value.weight;
      this.height = form.value.height;
      this.ethnicity = form.value.ethnicity;
      this.otherEthnicity = form.value.otherEthnicity;
      this.cityOfResidence = form.value.cityOfResidence;
      this.provinceOfResidence = form.value.provinceOfResidence;
      this.countryOfResidence = form.value.countryOfResidence;
      this.education = form.value.education;
      this.currentOccupationalStatus = form.value.currentOccupationalStatus;
      this.historyOfOccupations = history;
    } else {
      this.sex = '';
      this.dateOfBirth = '';
      this.cityOfBirth = '';
      this.provinceOfBirth = '';
      this.countryOfBirth = '';
      this.weight = '';
      this.height = '';
      this.ethnicity = '';
      this.otherEthnicity = '';
      this.cityOfResidence = '';
      this.provinceOfResidence = '';
      this.countryOfResidence = '';
      this.education = '';
      this.currentOccupationalStatus = '';
      this.historyOfOccupations = new Array<Occupation>();
    }
  }
}

class Occupation {
  sicCode: string;
  occupationStartingTime: string;
  occupationEndingTime: string;

  constructor(form?) {
    if (form) {
      this.sicCode = form.value.sicCode;
      this.occupationStartingTime = form.value.occupationStartingTime;
      this.occupationEndingTime = form.value.occupationEndingTime;
    } else {
      this.sicCode = '';
      this.occupationStartingTime = '';
      this.occupationEndingTime = '';
    }
  }
}



export { SectionA2, Occupation };
