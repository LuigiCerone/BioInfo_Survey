import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatStepperModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatDialogModule,
  MatRadioModule,
  MatFormFieldModule,
  MatGridListModule
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
  MatToolbarModule,
  MatDividerModule,
  MatDialogModule,
  MatRadioModule,
  MatFormFieldModule,
  MatGridListModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
