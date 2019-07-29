import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugesPage } from './gauges.page';

describe('GaugesPage', () => {
  let component: GaugesPage;
  let fixture: ComponentFixture<GaugesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
