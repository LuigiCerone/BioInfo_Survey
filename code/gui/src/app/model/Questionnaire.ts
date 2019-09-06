import { SectionA1 } from './SectionA1';
import { SectionA2 } from './SectionA2';
import { SectionB1 } from './SectionB1';
import { SectionB2 } from './SectionB2';
import { SectionB3 } from './SectionB3';
import { SectionE } from './SectionE';
import { SectionC1 } from './SectionC1';
import { SectionC2 } from './SectionC2';
import { SectionC3 } from './SectionC3';
import { SectionD } from './SectionD';

export class Questionnaire {
  id: string;
  ownerUsername: string;
  a1: SectionA1;
  a2: SectionA2;
  b1: SectionB1;
  b2: SectionB2;
  b3: SectionB3;
  be: SectionE;
  c1: SectionC1;
  c2: SectionC2;
  c3: SectionC3;
  ce: SectionE;
  d: Array<SectionD>;
  numberOfMPM: number;
}
