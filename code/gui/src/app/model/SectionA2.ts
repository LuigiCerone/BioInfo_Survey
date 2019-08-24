export class SectionA2{
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
  // historyOfOccupations: Array<Occupation>;

  constructor(form?) {
    if (form) {
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
    }
  }
}
