import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionFormComponent } from './suscripcion-form.component';

describe('SuscripcionFormComponent', () => {
  let component: SuscripcionFormComponent;
  let fixture: ComponentFixture<SuscripcionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuscripcionFormComponent]
    });
    fixture = TestBed.createComponent(SuscripcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
