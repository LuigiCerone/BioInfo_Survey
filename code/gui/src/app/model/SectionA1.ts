import * as moment from 'moment';

export class SectionA1{
  subject: string;
  dbCodeNumber: string;
  dateOfQuestionnaireAdministration: string;
  datesOfUpdateQuestionnaire: Array<string>;
  typeOfMelanoma: string;
  otherSpecification: string;


  constructor(form?) {
    if (form) {
      this.subject = form.value.subject;
      this.dbCodeNumber = form.value.dbCodeNumber;
      this.dateOfQuestionnaireAdministration = form.value.dateOfQuestionnaireAdministration;
      this.datesOfUpdateQuestionnaire = form.value.datesOfUpdateQuestionnaire;
      this.typeOfMelanoma = form.value.typeOfMelanoma;
      this.otherSpecification = form.value.otherSpecification;
    } else {
      this.subject = '';
      this.dbCodeNumber = '';
      this.dateOfQuestionnaireAdministration = moment().format('DD/MMM/YYYY');
      this.datesOfUpdateQuestionnaire = new Array<string>('');
      this.typeOfMelanoma = '';
      this.otherSpecification = '';
    }
  }
}
