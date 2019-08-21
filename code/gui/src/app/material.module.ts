import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule, MatSelectModule, MatOptionModule, MatStepperModule, MatMenu, MatMenuModule, MatIconModule, MatToolbarModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatStepperModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
