import { SectionA1 } from './SectionA1';
import { SectionA2 } from './SectionA2';
import { SectionB1 } from './SectionB1';
import { SectionB2 } from './SectionB2';
import { SectionB3 } from './SectionB3';

export class Questionnaire {
  id: string;
  ownerUsername: string;
  a1: SectionA1;
  a2: SectionA2;
  b1: SectionB1;
  b2: SectionB2;
  b3: SectionB3;
  // TODO Add other fields.
}
