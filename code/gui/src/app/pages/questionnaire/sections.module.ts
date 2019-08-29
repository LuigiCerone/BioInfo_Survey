import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionA1Component } from './section-a1/section-a1.component';
import { SectionA2Component } from './section-a2/section-a2.component';
import { MaterialModule } from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SectionB1Component } from './section-b1/section-b1.component';
import { SectionB2Component } from './section-b2/section-b2.component';
import { SectionB3Component } from './section-b3/section-b3.component';
import { SectionC1Component } from './section-c1/section-c1.component';
import { SectionEComponent } from './section-e/section-e.component';
import { SectionC2Component } from './section-c2/section-c2.component';
import { SectionC3Component } from './section-c3/section-c3.component';
import { SectionDComponent } from './section-d/section-d.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SectionA1Component,
    SectionA2Component,
    SectionB1Component,
    SectionB2Component,
    SectionB3Component,
    SectionEComponent,
    SectionC1Component,
    SectionC2Component,
    SectionC3Component,
    SectionDComponent,
  ],
  declarations: [
    SectionA1Component,
    SectionA2Component,
    SectionB1Component,
    SectionB2Component,
    SectionB3Component,
    SectionEComponent,
    SectionC1Component,
    SectionC2Component,
    SectionC3Component,
    SectionDComponent,
  ]
})
export class SectionsModule { }
