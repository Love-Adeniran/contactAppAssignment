import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachContactComponent } from './each-contact.component';

describe('EachContactComponent', () => {
  let component: EachContactComponent;
  let fixture: ComponentFixture<EachContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
