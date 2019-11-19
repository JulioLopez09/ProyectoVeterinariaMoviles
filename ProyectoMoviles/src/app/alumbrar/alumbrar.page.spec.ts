import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumbrarPage } from './alumbrar.page';

describe('AlumbrarPage', () => {
  let component: AlumbrarPage;
  let fixture: ComponentFixture<AlumbrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumbrarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumbrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
