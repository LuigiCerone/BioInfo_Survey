export class SectionE {
  complexityOfTheQuestionnaire: string;
  difficultQuestions: string;

  constructor(form?) {
    if (form) {
      this.complexityOfTheQuestionnaire = form.value.complexityOfTheQuestionnaire;
      this.difficultQuestions = form.value.difficultQuestions;
    } else {
      this.complexityOfTheQuestionnaire = '';
      this.difficultQuestions = '';
    }
  }
}
