import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionA1Component } from './section-a1.component';

describe('SectionA1Component', () => {
  let component: SectionA1Component;
  let fixture: ComponentFixture<SectionA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
