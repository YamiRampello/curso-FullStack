import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaComponent } from './grilla.component';

describe('GrillaComponent', () => {
  let component: GrillaComponent;
  let fixture: ComponentFixture<GrillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrillaComponent]
    });
    fixture = TestBed.createComponent(GrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
