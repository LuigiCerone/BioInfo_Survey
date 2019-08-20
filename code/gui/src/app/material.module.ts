import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule, MatSelectModule, MatOptionModule, MatStepperModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatStepperModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
