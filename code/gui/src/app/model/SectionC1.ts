class SectionC1 {
  solarLentigines: SolarLentigines;
  neviCountGreatherThan2mm: {};
  neviCountLessThan2mm: string;
  clinicallyAtypicalNevi: ClinicallyAtypicalNevi;
  congenitalNevi: CongenitalNevi;
  blueNevi: BlueNevi;
  actinicKeratoses: ActinicKeratoses;
  currentNonMelanomaSkinCancers: {};

  constructor(form?) {
    if (form) {
      this.solarLentigines = new SolarLentigines(form.value);
      this.neviCountGreatherThan2mm = {};
      this.neviCountGreatherThan2mm[NeviCount.KEY_SCALP] = new NeviCount(NeviCount.KEY_SCALP, form.value);
      this.neviCountGreatherThan2mm[NeviCount.KEY_NECK] = new NeviCount(NeviCount.KEY_NECK, form.value);
      this.neviCountGreatherThan2mm[NeviCount.KEY_PALMS] = new NeviCount(NeviCount.KEY_PALMS, form.value);
      this.neviCountGreatherThan2mm[NeviCount.KEY_GLUTEUS] = new NeviCount(NeviCount.KEY_GLUTEUS, form.value);
      this.neviCountGreatherThan2mm[NeviCount.KEY_DELTOID] = new NeviCount(NeviCount.KEY_DELTOID, form.value);
      this.neviCountGreatherThan2mm[NeviCount.KEY_ABDOMEN] = new NeviCount(NeviCount.KEY_ABDOMEN, form.value);
      this.neviCountGreatherThan2mm[NeviCount.KEY_BACK] = new NeviCount(NeviCount.KEY_BACK, form.value);
      this.neviCountGreatherThan2mm[NeviCount.KEY_FACE] = new NeviCount(NeviCount.KEY_FACE, form.value);
      this.neviCountGreatherThan2mm[NeviCount.KEY_SOLES] = new NeviCount(NeviCount.KEY_SOLES, form.value);
      this.neviCountLessThan2mm = form.value.neviCountLessThan2mm;
      this.clinicallyAtypicalNevi = new ClinicallyAtypicalNevi(form.value);
      this.congenitalNevi = new CongenitalNevi(form.value);
      this.blueNevi = new BlueNevi(form.value);
      this.actinicKeratoses = new ActinicKeratoses(form.value);
      this.currentNonMelanomaSkinCancers = {};
      this.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_BCC] =
          new CurrentNonMelanomaSkinCancers(CurrentNonMelanomaSkinCancers.KEY_BCC, form.value);
      this.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_SSCC] =
        new CurrentNonMelanomaSkinCancers(CurrentNonMelanomaSkinCancers.KEY_SSCC, form.value);
      this.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_ISCC] =
        new CurrentNonMelanomaSkinCancers(CurrentNonMelanomaSkinCancers.KEY_ISCC, form.value);
    } else {
      this.solarLentigines = new SolarLentigines();
      this.neviCountGreatherThan2mm = {};
      this.neviCountGreatherThan2mm[NeviCount.KEY_SCALP] = new NeviCount(NeviCount.KEY_SCALP);
      this.neviCountGreatherThan2mm[NeviCount.KEY_NECK] = new NeviCount(NeviCount.KEY_NECK);
      this.neviCountGreatherThan2mm[NeviCount.KEY_PALMS] = new NeviCount(NeviCount.KEY_PALMS);
      this.neviCountGreatherThan2mm[NeviCount.KEY_GLUTEUS] = new NeviCount(NeviCount.KEY_GLUTEUS);
      this.neviCountGreatherThan2mm[NeviCount.KEY_DELTOID] = new NeviCount(NeviCount.KEY_DELTOID);
      this.neviCountGreatherThan2mm[NeviCount.KEY_ABDOMEN] = new NeviCount(NeviCount.KEY_ABDOMEN);
      this.neviCountGreatherThan2mm[NeviCount.KEY_BACK] = new NeviCount(NeviCount.KEY_BACK);
      this.neviCountGreatherThan2mm[NeviCount.KEY_FACE] = new NeviCount(NeviCount.KEY_FACE);
      this.neviCountGreatherThan2mm[NeviCount.KEY_SOLES] = new NeviCount(NeviCount.KEY_SOLES);
      this.neviCountLessThan2mm = '';
      this.clinicallyAtypicalNevi = new ClinicallyAtypicalNevi();
      this.congenitalNevi = new CongenitalNevi();
      this.blueNevi = new BlueNevi();
      this.actinicKeratoses = new ActinicKeratoses();
      this.currentNonMelanomaSkinCancers = {};
      this.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_BCC] =
        new CurrentNonMelanomaSkinCancers(CurrentNonMelanomaSkinCancers.KEY_BCC);
      this.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_SSCC] =
        new CurrentNonMelanomaSkinCancers(CurrentNonMelanomaSkinCancers.KEY_SSCC);
      this.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_ISCC] =
        new CurrentNonMelanomaSkinCancers(CurrentNonMelanomaSkinCancers.KEY_ISCC);
    }
  }
}

class SolarLentigines {
  howMany: string;
  atSiteOfMelanoma: boolean;

  constructor(form?) {
    if (form) {
      this.howMany = form.howManySolarLentigines;
      this.atSiteOfMelanoma = form.solarLentiginesAtSiteOfMelanoma;
    } else {
      this.howMany = '';
      this.atSiteOfMelanoma = false;
    }
  }
}

class NeviCount {
  public static KEY_SCALP = 'scalp';
  public static KEY_FACE = 'face';
  public static KEY_NECK = 'neck';
  public static KEY_ABDOMEN = 'abdomen';
  public static KEY_BACK = 'back';
  public static KEY_DELTOID = 'deltoid';
  public static KEY_GLUTEUS = 'gluteus';
  public static KEY_PALMS = 'palms';
  public static KEY_SOLES = 'soles';

  site: string;
  leftZoneNumber: number;
  rightZoneNumber: number;

  constructor(site: string, form?) {
    if (form) {
      this.site = site;
      switch (site) {
        case NeviCount.KEY_NECK:
          this.leftZoneNumber = form.neviCountLeftNeck;
          this.rightZoneNumber = form.neviCountRightNeck;
          break;
        case NeviCount.KEY_SCALP:
          this.leftZoneNumber = form.neviCountLeftScalp;
          this.rightZoneNumber = form.neviCountRightScalp;
          break;
        case NeviCount.KEY_FACE:
          this.leftZoneNumber = form.neviCountLeftFace;
          this.rightZoneNumber = form.neviCountRightFace;
          break;
        case NeviCount.KEY_ABDOMEN:
          this.leftZoneNumber = form.neviCountLeftAbdomen;
          this.rightZoneNumber = form.neviCountRightAbdomen;
          break;
        case NeviCount.KEY_BACK:
          this.leftZoneNumber = form.neviCountLeftBack;
          this.rightZoneNumber = form.neviCountRightBack;
          break;
        case NeviCount.KEY_DELTOID:
          this.leftZoneNumber = form.neviCountLeftDeltoid;
          this.rightZoneNumber = form.neviCountRightDeltoid;
          break;
        case NeviCount.KEY_GLUTEUS:
          this.leftZoneNumber = form.neviCountLeftGluteus;
          this.rightZoneNumber = form.neviCountRightGluteus;
          break;
        case NeviCount.KEY_PALMS:
          this.leftZoneNumber = form.neviCountLeftPalms;
          this.rightZoneNumber = form.neviCountRightPalms;
          break;
        case NeviCount.KEY_SOLES:
          this.leftZoneNumber = form.neviCountLeftSoles;
          this.rightZoneNumber = form.neviCountRightSoles;
          break;
      }

    } else {
      this.site = site;
      this.leftZoneNumber = 0;
      this.rightZoneNumber = 0;
    }
  }
}

class ClinicallyAtypicalNevi {
  howMany: number;
  atSiteOfMelanoma: boolean;

  constructor(form?) {
    if (form) {
      this.howMany = form.howManyClinicallyAtypicalNevi;
      this.atSiteOfMelanoma = form.clinicallyAtypicalNeviAtSiteOfMelanoma;
    } else {
      this.howMany = 0;
      this.atSiteOfMelanoma = false;
    }
  }
}

class CongenitalNevi {
  presenceOfMediumSizedNevi: boolean;
  siteOfMediumSizedNevi: string;
  presenceOfLargeSizedNevi: boolean;
  siteOfLargeSizedNevi: string;
  presenceOfGiantSizedNevi: boolean;
  siteOfGiantSizedNevi: string;

  constructor(form?) {
    if (form) {
      this.presenceOfMediumSizedNevi = form.presenceOfMediumSizedNevi;
      this.siteOfMediumSizedNevi = form.siteOfMediumSizedNevi;
      this.presenceOfLargeSizedNevi = form.presenceOfLargeSizedNevi;
      this.siteOfLargeSizedNevi = form.siteOfLargeSizedNevi;
      this.presenceOfGiantSizedNevi = form.presenceOfGiantSizedNevi;
      this.siteOfGiantSizedNevi = form.siteOfGiantSizedNevi;
    } else {
      this.presenceOfMediumSizedNevi = false;
      this.siteOfMediumSizedNevi = '';
      this.presenceOfLargeSizedNevi = false;
      this.siteOfLargeSizedNevi = '';
      this.presenceOfGiantSizedNevi = false;
      this.siteOfGiantSizedNevi = '';
    }
  }
}

class BlueNevi {
  presence: boolean;
  number = 0;

  constructor(form?) {
    if (form) {
      this.presence = form.blueNeviPresence;
      this.number = form.numberOfBlueNevi;
    } else {
      this.presence = false;
      this.number = 0;
    }
  }
}

class ActinicKeratoses {
  presence: boolean;
  site = '';
  typeOfDistribution = '';

  constructor(form?) {
    if (form) {
      this.presence = form.actinicKeratosesPresence;
      this.site = form.actinicKeratosesSite;
      this.typeOfDistribution = form.actinicKeratosesTypeOfDistribution;
    } else {
      this.presence = false;
      this.site = '';
      this.typeOfDistribution = '';
    }
  }
}

class CurrentNonMelanomaSkinCancers {
  public static KEY_BCC = 'bcc';
  public static KEY_ISCC = 'iscc';
  public static KEY_SSCC = 'sscc';

  type: string;
  presence: boolean;
  number: number;
  site: string;

  constructor(type: string, form?) {
    this.type = type;
    if (form) {
      switch (type) {
        case CurrentNonMelanomaSkinCancers.KEY_BCC:
          this.presence = form.bCCPresence;
          this.number = form.bCCNumber;
          this.site = form.bCCSite;
          break;
        case CurrentNonMelanomaSkinCancers.KEY_ISCC:
          this.presence = form.iSCCPresence;
          this.number = form.iSCCNumber;
          this.site = form.iSCCSite;
          break;
        case CurrentNonMelanomaSkinCancers.KEY_SSCC:
          this.presence = form.sSCCPresence;
          this.number = form.sSCCNumber;
          this.site = form.sSCCSite;
          break;
      }
    } else {
      this.presence = false;
      this.number = 0;
      this.site = '';
    }
  }
}

export {SectionC1, NeviCount, CurrentNonMelanomaSkinCancers};
