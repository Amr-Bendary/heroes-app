import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTogglerComponent } from './custom-toggler.component';

describe('CustomTogglerComponent', () => {
  let component: CustomTogglerComponent;
  let fixture: ComponentFixture<CustomTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
