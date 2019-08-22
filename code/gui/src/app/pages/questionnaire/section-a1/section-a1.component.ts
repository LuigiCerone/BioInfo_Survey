import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

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
    database: new FormControl(''),
    date: new FormControl(''),
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
  selectedValue = '';
  constructor() {}
  @Input() pattern: string | RegExp;
  @Input() error: string | null;
  ngOnInit() {

  }

}
