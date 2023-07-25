import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworkentryComponent } from './myworkentry.component';

describe('MyworkentryComponent', () => {
  let component: MyworkentryComponent;
  let fixture: ComponentFixture<MyworkentryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyworkentryComponent]
    });
    fixture = TestBed.createComponent(MyworkentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
