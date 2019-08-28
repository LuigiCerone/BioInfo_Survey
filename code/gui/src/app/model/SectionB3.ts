export class SectionB3 {

  smoker: Smoker;
  intakeOfVitaminesDuringLastYears: string;
  vitamin: Map<string, Vitamin>;

  constructor(form?) {
    if (form) {
      this.smoker = new Smoker(form.value.smoker);
      this.intakeOfVitaminesDuringLastYears = form.value.intakeOfVitaminesDuringLastYears;
      this.vitamin = new Map<string, Vitamin>();
      this.vitamin.set(Vitamin.BETA_CAROTENE, new Vitamin(Vitamin.BETA_CAROTENE, form.value.received, form.value.period));
      this.vitamin.set(Vitamin.VITAMIN_A, new Vitamin(Vitamin.VITAMIN_A, form.value.received, form.value.period));
      this.vitamin.set(Vitamin.VITAMIN_C, new Vitamin(Vitamin.VITAMIN_C, form.value.received, form.value.period));
      this.vitamin.set(Vitamin.VITAMIN_E, new Vitamin(Vitamin.VITAMIN_E, form.value.received, form.value.period));
      this.vitamin.set(Vitamin.VITAMIN_D, new Vitamin(Vitamin.VITAMIN_D, form.value.received, form.value.period));
      this.vitamin.set(Vitamin.MULTIVITAMINS, new Vitamin(Vitamin.MULTIVITAMINS, form.value.received, form.value.period));
    } else {
      this.smoker = new Smoker();
      this.intakeOfVitaminesDuringLastYears = '';
      this.vitamin = new Map<string, Vitamin>();
      this.vitamin.set(Vitamin.BETA_CAROTENE, new Vitamin(Vitamin.BETA_CAROTENE));
      this.vitamin.set(Vitamin.VITAMIN_A, new Vitamin(Vitamin.VITAMIN_A));
      this.vitamin.set(Vitamin.VITAMIN_C, new Vitamin(Vitamin.VITAMIN_C));
      this.vitamin.set(Vitamin.VITAMIN_E, new Vitamin(Vitamin.VITAMIN_E));
      this.vitamin.set(Vitamin.VITAMIN_D, new Vitamin(Vitamin.VITAMIN_D));
      this.vitamin.set(Vitamin.MULTIVITAMINS, new Vitamin(Vitamin.MULTIVITAMINS));
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
      this.howOften = form.value.smoker.howOften;
      this.ageWhenStartedSmoking = form.value.smoker.ageWhenStartedSmoking;
      this.howLongHaveYouBeenSmoking = form.value.smoker.howLongHaveYouBeenSmoking;
      this.howMuchTipicallySmoke = form.value.smoker.howMuchTipicallySmoke;
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

  constructor(name: string, form1?, form2?) {
    if (form1 && form2) {
      this.name = name;
      this.howOften = form1.value.name;
      this.howLong = form2.value.name;
    } else {
      this.name = name;
      this.howOften = '';
      this.howLong = '';
    }
  }
}
