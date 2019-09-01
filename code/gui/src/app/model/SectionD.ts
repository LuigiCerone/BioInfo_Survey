export class SectionD {
  preExistingPigmentedLesionAtTheSameSiteOfMelanoma: boolean;
  durationPreExistingPigmentedLesionAtTheSameSiteOfMelanoma: string;
  detectionOfMelanoma: string;
  selfSkinExam: string;
  skinExamByPhysician: string;
  presenceOfMPM: boolean;
  dateOfDiagnosis: string;
  primaryTumorKnown: boolean;
  site: string;
  breslowThinkness: number;
  otherMainHistopatologicFeatures: OtherMainHistopatologicFeatures;
  sentinelLymphNodebiopsyDone: string;
  sentinelLymphNodebiopsyResult: string;
  ajccStageAtDiagnosis: string;
  mutationalData: MutationalData;

  constructor(form?) {
    if (form) {
      this.preExistingPigmentedLesionAtTheSameSiteOfMelanoma = form.value.preExistingPigmentedLesionAtTheSameSiteOfMelanoma;
      this.durationPreExistingPigmentedLesionAtTheSameSiteOfMelanoma = form.value.durationPreExistingPigmentedLesionAtTheSameSiteOfMelanoma;
      this.detectionOfMelanoma = form.value.detectionOfMelanoma;
      this.selfSkinExam = form.value.selfSkinExam;
      this.skinExamByPhysician = form.value.skinExamByPhysician;
      this.presenceOfMPM = form.value.presenceOfMPM;
      this.dateOfDiagnosis = form.value.dateOfDiagnosis;
      this.primaryTumorKnown = form.value.primaryTumorKnown;
      this.site = form.value.site;
      this.breslowThinkness = form.value.breslowThinkness;
      this.otherMainHistopatologicFeatures = new OtherMainHistopatologicFeatures(form);
      this.sentinelLymphNodebiopsyDone = form.value.sentinelLymphNodebiopsyDone;
      this.sentinelLymphNodebiopsyResult = form.value.sentinelLymphNodebiopsyResult;
      this.ajccStageAtDiagnosis = form.value.ajccStageAtDiagnosis;
      this.mutationalData = new MutationalData(form);
    } else {
      this.preExistingPigmentedLesionAtTheSameSiteOfMelanoma = false;
      this.durationPreExistingPigmentedLesionAtTheSameSiteOfMelanoma =  '';
      this.detectionOfMelanoma =  '';
      this.selfSkinExam =  '';
      this.skinExamByPhysician =  '';
      this.presenceOfMPM =  false;
      this.dateOfDiagnosis =  '';
      this.primaryTumorKnown = false;
      this.site =  '';
      this.breslowThinkness = 0;
      this.otherMainHistopatologicFeatures = new OtherMainHistopatologicFeatures();
      this.sentinelLymphNodebiopsyDone =  '';
      this.sentinelLymphNodebiopsyResult =  '';
      this.ajccStageAtDiagnosis =  '';
      this.mutationalData = new MutationalData();
    }
  }
}

class OtherMainHistopatologicFeatures {
  subtype: string;
  mitoticRate: string;
  ulceration: string;
  tumorGrowthPhase: string;
  regression: string;
  regressionPercentage = 0;
  tumorInfiltratingLymphocytes: string;
  associatedNevus: string;
  associatedNevusType = '';
  vascularInvasion: string;
  microsatellitosis: string;
  pigmentation: string;
  solarElastosis: string;
  lateralMarginStatus: string;
  deepMarginStatus: string;

  constructor(form?) {
    if (form) {
      this.subtype = form.value.subtype;
      this.mitoticRate = form.value.mitoticRate;
      this.ulceration = form.value.ulceration;
      this.tumorGrowthPhase = form.value.tumorGrowthPhase;
      this.regression = form.value.regression;
      this.regressionPercentage = form.value.regressionPercentage;
      this.tumorInfiltratingLymphocytes = form.value.tumorInfiltratingLymphocytes;
      this.associatedNevus = form.value.associatedNevus;
      this.associatedNevusType = form.value.associatedNevusType;
      this.vascularInvasion = form.value.vascularInvasion;
      this.microsatellitosis = form.value.microsatellitosis;
      this.pigmentation = form.value.pigmentation;
      this.solarElastosis = form.value.solarElastosis;
      this.lateralMarginStatus = form.value.lateralMarginStatus;
      this.deepMarginStatus = form.value.deepMarginStatus;
    } else {
      this.subtype =  '';
      this.mitoticRate =  '';
      this.ulceration =  '';
      this.tumorGrowthPhase =  '';
      this.regression =  '';
      this.regressionPercentage =  0;
      this.tumorInfiltratingLymphocytes =  '';
      this.associatedNevus =  '';
      this.associatedNevusType =  '';
      this.vascularInvasion =  '';
      this.microsatellitosis =  '';
      this.pigmentation =  '';
      this.solarElastosis =  '';
      this.lateralMarginStatus =  '';
      this.deepMarginStatus =  '';
    }
  }
}

class MutationalData {
  gene: string;
  sourceOfData: string;
  site: string;

  constructor(form?) {
    if (form) {
      this.gene = form.value.gene;
      this.sourceOfData = form.value.sourceOfData;
      this.site = form.value.siteMutational;
    } else {
      this.gene = '';
      this.sourceOfData = '';
      this.site = '';
    }
  }
}
