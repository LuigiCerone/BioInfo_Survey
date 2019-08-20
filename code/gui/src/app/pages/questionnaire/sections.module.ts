import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionA1Component } from './section-a1/section-a1.component';
import { SectionA2Component } from './section-a2/section-a2.component';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionB1Component } from './section-b1/section-b1.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SectionA1Component,
    SectionA2Component,
    SectionB1Component
  ],
  declarations: [
    SectionA1Component,
    SectionA2Component,
    SectionB1Component
  ]
})
export class SectionsModule { }
