export class SectionC1 {
  solarLentigines: SolarLentigines;
  neviCountGreatherThan2mm: Map<string, NeviCount>;
  neviCountLessThan2mm: string;
  clinicallyAtypicalNevi: ClinicallyAtypicalNevi;
  congenitalNevi: CongenitalNevi;
  blueNevi: number;
  actinicKeratoses: ActinicKeratoses;
  currentNonMelanomaSkinCancers: Map<string, CurrentNonMelanomaSkinCancers>;

  constructor(form?) {
    if (form) {
      this.solarLentigines = new SolarLentigines(form.value.solarLentigines);
      this.neviCountGreatherThan2mm = new Map<string, NeviCount>();
      this.neviCountLessThan2mm = form.value.neviCountLessThan2mm;
      this.clinicallyAtypicalNevi = new ClinicallyAtypicalNevi(form.value.clinicallyAtypicalNevi);
      this.congenitalNevi = new CongenitalNevi(form.value.congenitalNevi);
      this.blueNevi = form.value.blueNevi;
      this.actinicKeratoses = new ActinicKeratoses(form.value.actinicKeratoses);
      this.currentNonMelanomaSkinCancers = new Map<string, CurrentNonMelanomaSkinCancers>();
    } else {
      this.solarLentigines = new SolarLentigines();
      this.neviCountGreatherThan2mm = new Map<string, NeviCount>();
      this.neviCountLessThan2mm = '';
      this.clinicallyAtypicalNevi = new ClinicallyAtypicalNevi();
      this.congenitalNevi = new CongenitalNevi();
      this.blueNevi = 0;
      this.actinicKeratoses = new ActinicKeratoses();
      this.currentNonMelanomaSkinCancers = new Map<string, CurrentNonMelanomaSkinCancers>();
    }
  }
}

class SolarLentigines {
  howMany: string;
  atSiteOfMelanoma: boolean;

  constructor(form?) {
    if (form) {
      this.howMany = form.value.solarLentigines.howMany;
      this.atSiteOfMelanoma = form.value.solarLentigines.atSiteOfMelanoma;
    } else {
      this.howMany = '';
      this.atSiteOfMelanoma = false;
    }
  }
}

class NeviCount {
  site: string;
  leftZoneNumber: number;
  rightZoneNumber: number;

  constructor(form?) {
    if (form) {
      this.site = form.value.neviCount.site;
      this.leftZoneNumber = form.value.neviCount.leftZoneNumber;
      this.rightZoneNumber = form.value.neviCount.rightZoneNumber;
    } else {
      this.site = '';
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
      this.howMany = form.value.clinicallyAtypicalNevi.howMany;
      this.atSiteOfMelanoma = form.value.clinicallyAtypicalNevi.atSiteOfMelanoma;
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
  presenceOfGiantNevi: boolean;
  siteOfGiantSizedNevi: string;

  constructor(form?) {
    if (form) {
      this.presenceOfMediumSizedNevi = form.value.CongenitalNevi.numberOfMediumSizedNevi;
      this.siteOfMediumSizedNevi = form.value.CongenitalNevi.siteOfMediumSizedNevi;
      this.presenceOfLargeSizedNevi = form.value.CongenitalNevi.numberOfLargeSizedNevi;
      this.siteOfLargeSizedNevi = form.value.CongenitalNevi.siteOfLargeSizedNevi;
      this.presenceOfGiantNevi = form.value.CongenitalNevi.numberOfGiantNevi;
      this.siteOfGiantSizedNevi = form.value.CongenitalNevi.siteOfGiantSizedNevi;
    } else {
      this.presenceOfMediumSizedNevi = false;
      this.siteOfMediumSizedNevi = '';
      this.presenceOfLargeSizedNevi = false;
      this.siteOfLargeSizedNevi = '';
      this.presenceOfGiantNevi = false;
      this.siteOfGiantSizedNevi = '';
    }
  }
}

class ActinicKeratoses {
  site: string;
  typeOfDistribution: string;

  constructor(form?) {
    if (form) {
      this.site = form.value.actinicKeratoses.site;
      this.typeOfDistribution = form.value.actinicKeratoses.typeOfDistribution;
    } else {
      this.site = '';
      this.typeOfDistribution = '';
    }
  }
}

class CurrentNonMelanomaSkinCancers {
  type: string;
  number: number;
  site: string;

  constructor(form?) {
    if (form) {
      this.type = form.value.currentNonMelanomaSkinCancers.type;
      this.number = form.value.currentNonMelanomaSkinCancers.number;
      this.site = form.value.currentNonMelanomaSkinCancers.site;
    } else {
      this.type = '';
      this.number = 0;
      this.site = '';
    }
  }
}
