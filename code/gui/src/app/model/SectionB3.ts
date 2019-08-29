class SectionB3 {

  smoker: Smoker;
  intakeOfVitaminesDuringLastYears: boolean;
  frequencyOfVitaminsDuringLastYears: string;
  vitamin: object;

  constructor(form?) {
    if (form) {
      this.smoker = new Smoker(form.value);
      this.intakeOfVitaminesDuringLastYears = form.value.intakeOfVitaminesDuringLastYears;
      this.frequencyOfVitaminsDuringLastYears = form.value.frequencyOfVitaminsDuringLastYears;
      this.vitamin = {};
      this.vitamin[Vitamin.BETA_CAROTENE] = new Vitamin(Vitamin.BETA_CAROTENE, form.value);
      this.vitamin[Vitamin.VITAMIN_A] = new Vitamin(Vitamin.VITAMIN_A, form.value);
      this.vitamin[Vitamin.VITAMIN_C] = new Vitamin(Vitamin.VITAMIN_C, form.value);
      this.vitamin[Vitamin.VITAMIN_E] = new Vitamin(Vitamin.VITAMIN_E, form.value);
      this.vitamin[Vitamin.VITAMIN_D] = new Vitamin(Vitamin.VITAMIN_D, form.value);
      this.vitamin[Vitamin.MULTIVITAMINS] = new Vitamin(Vitamin.MULTIVITAMINS, form.value);
    } else {
      this.smoker = new Smoker();
      this.intakeOfVitaminesDuringLastYears = false;
      this.frequencyOfVitaminsDuringLastYears = '';
      this.vitamin = {};
      this.vitamin[Vitamin.BETA_CAROTENE] = new Vitamin(Vitamin.BETA_CAROTENE);
      this.vitamin[Vitamin.VITAMIN_A] = new Vitamin(Vitamin.VITAMIN_A);
      this.vitamin[Vitamin.VITAMIN_C] = new Vitamin(Vitamin.VITAMIN_C);
      this.vitamin[Vitamin.VITAMIN_E] = new Vitamin(Vitamin.VITAMIN_E);
      this.vitamin[Vitamin.VITAMIN_D] = new Vitamin(Vitamin.VITAMIN_D);
      this.vitamin[Vitamin.MULTIVITAMINS] = new Vitamin(Vitamin.MULTIVITAMINS);
    }
  }
}

class Smoker {
  howOften: string;
  ageWhenStartedSmoking: number;
  howLongHaveYouBeenSmoking: string;
  howMuchTipicallySmoke: string;

  constructor(form?) {
    if (form) {
      this.howOften = form.smoker;
      this.ageWhenStartedSmoking = form.ageWhenStartedSmoking;
      this.howLongHaveYouBeenSmoking = form.howLongHaveYouBeenSmoking;
      this.howMuchTipicallySmoke = form.howMuchTipicallySmoke;
    } else {
      this.howOften = '';
      this.ageWhenStartedSmoking = 0;
      this.howLongHaveYouBeenSmoking = '';
      this.howMuchTipicallySmoke = '';
    }
  }
}

class Vitamin {
  public static BETA_CAROTENE = 'betaCarotene';
  public static VITAMIN_A = 'vitaminA';
  public static VITAMIN_C = 'vitaminC';
  public static VITAMIN_E = 'vitaminE';
  public static VITAMIN_D = 'vitaminD';
  public static MULTIVITAMINS = 'multivitamins';

  name: string;
  howOften: string;
  howLong: string;

  constructor(name: string, form?) {
    if (form) {
      this.name = name;
      switch (name) {
        case Vitamin.BETA_CAROTENE:
          this.howOften = form.howOftenBetaCarotene;
          this.howLong = form.howLongBetaCarotene;
          break;
        case Vitamin.VITAMIN_A:
          this.howOften = form.howOftenVitaminA;
          this.howLong = form.howLongVitaminA;
          break;
        case Vitamin.VITAMIN_C:
          this.howOften = form.howOftenVitaminC;
          this.howLong = form.howLongVitaminC;
          break;
        case Vitamin.VITAMIN_E:
          this.howOften = form.howOftenVitaminE;
          this.howLong = form.howLongVitaminE;
          break;
        case Vitamin.VITAMIN_D:
          this.howOften = form.howOftenVitaminD;
          this.howLong = form.howLongVitaminD;
          break;
        case Vitamin.MULTIVITAMINS:
          this.howOften = form.howOftenMultivitamins;
          this.howLong = form.howLongMultivitamins;
          break;
      }
    } else {
      this.name = name;
      this.howOften = '';
      this.howLong = '';
    }
  }
}

export { SectionB3, Vitamin };
