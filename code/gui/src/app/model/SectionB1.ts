export class SectionB1 {
  skinType1: string;
  skinType2: string;
  eyeColor: string;
  hairColor: string;
  freckles: string;
  neviInChildhoodAdolescence: string;

  constructor(form?) {
    if (form) {
      this.skinType1 = form.value.skinType1;
      this.skinType2 = form.value.skinType2;
      this.eyeColor = form.value.eyeColor;
      this.hairColor = form.value.hairColor;
      this.freckles = form.value.freckles;
      this.neviInChildhoodAdolescence = form.value.neviInChildhoodAdolescence;
    } else {
      this.skinType1 = '';
      this.skinType2 = '';
      this.eyeColor = '';
      this.hairColor = '';
      this.freckles = '';
      this.neviInChildhoodAdolescence = '';
    }
  }
}
