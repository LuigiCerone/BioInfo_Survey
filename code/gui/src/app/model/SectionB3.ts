export class SectionB3 {
  smoker: boolean;
  ageStartSmoking: string;
  yearsSmoking: string;
  packPerDay: string;
  halfPackPerDay: string;
  occasionallySmoke: string;
  everReceivedVitamins: string;
  vitaminPills: string;
  betaCarotene1: string;
  vitaminA1: string;
  vitaminB1: string;
  vitaminC1: string;
  vitaminE1: string;
  vitaminD1: string;
  multivitamins1: string;
  betaCarotene2: string;
  vitaminA2: string;
  vitaminB2: string;
  vitaminC2: string;
  vitaminE2: string;
  vitaminD2: string;
  multivitamins2: string;

  constructor(form?) {
    if (form) {
      this.smoker = form.value.smoker;
      this.ageStartSmoking = form.value.ageStartSmoking;
      this.yearsSmoking = form.value.yearsSmoking;
      this.packPerDay = form.value.packPerDay;
      this.halfPackPerDay = form.value.halfPackPerDay;
      this.occasionallySmoke = form.value.occasionallySmoke;
      this.everReceivedVitamins = form.value.everReceivedVitamins;
      this.vitaminPills = form.value.vitaminPills;
      this.betaCarotene1 = form.value.betaCarotene1;
      this.vitaminA1 = form.value.vitaminA1;
      this.vitaminB1 = form.value.vitaminB1;
      this.vitaminC1 = form.value.vitaminC1;
      this.vitaminE1 = form.value.vitaminE1;
      this.vitaminD1 = form.valuevitaminD1;
      this.multivitamins1 = form.value.multivitamins1;
      this.betaCarotene2 = form.value.betaCarotene2;
      this.vitaminA2 = form.value.vitaminA2;
      this.vitaminB2 = form.value.vitaminB2;
      this.vitaminC2 = form.value.vitaminC2;
      this.vitaminE2 = form.value.vitaminE2;
      this.vitaminD2 = form.value.vitaminD2;
      this.multivitamins2 = form.value.multivitamins2;
    } else {
      this.smoker = false;
      this.ageStartSmoking = '';
      this.yearsSmoking = '';
      this.packPerDay = '';
      this.halfPackPerDay = '';
      this.occasionallySmoke = '';
      this.everReceivedVitamins = '';
      this.vitaminPills = '';
      this.betaCarotene1 = '';
      this.vitaminA1 = '';
      this.vitaminB1 = '';
      this.vitaminC1 = '';
      this.vitaminE1 = '';
      this.vitaminD1 = '';
      this.multivitamins1 = '';
      this.betaCarotene2 = '';
      this.vitaminA2 = '';
      this.vitaminB2 = '';
      this.vitaminC2 = '';
      this.vitaminE2 = '';
      this.vitaminD2 = '';
      this.multivitamins2 = '';
    }
  }
}
