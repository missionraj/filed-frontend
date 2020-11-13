import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtoFormComponent } from './dto-form.component';

describe('DtoFormComponent', () => {
  let component: DtoFormComponent;
  let fixture: ComponentFixture<DtoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
