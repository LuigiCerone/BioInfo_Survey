import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionA1 } from '../../../model/SectionA1';

export interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-section-a1',
  templateUrl: './section-a1.component.html',
  styleUrls: ['./section-a1.component.css']
})

export class SectionA1Component implements OnInit {
  form: FormGroup = new FormGroup({
    subject: new FormControl('', Validators.required),
    database: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{4}[MC][0-9]{4}')
    ]),
    date: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')
    ]),
    typeMelanoma: new FormControl('', Validators.required)
  });


  subjectOpt: Options[] = [
    {value: 'case', viewValue: 'Case'},
    {value: 'control', viewValue: 'Control'},
  ];

  melanomaOpt: Options[] = [
    {value: 'sporadic', viewValue: 'Sporadic'},
    {value: 'familial', viewValue: 'Familial'},
    {value: 'dont_know', viewValue: 'Don\'t know'},
    {value: 'other', viewValue: 'Other'},
  ];

  @Input() a1: SectionA1;

  constructor() {}

  ngOnInit() {
    console.log(`I've received: ${JSON.stringify(this.a1)}`);
  }

}
