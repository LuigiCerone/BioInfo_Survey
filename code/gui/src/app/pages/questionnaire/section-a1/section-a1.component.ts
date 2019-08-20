import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-section-a1',
  templateUrl: './section-a1.component.html',
  styleUrls: ['./section-a1.component.css']
})
export class SectionA1Component implements OnInit {
  firstFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
