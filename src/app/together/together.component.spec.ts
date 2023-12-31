import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherComponent } from './together.component';

describe('TogetherComponent', () => {
  let component: TogetherComponent;
  let fixture: ComponentFixture<TogetherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TogetherComponent]
    });
    fixture = TestBed.createComponent(TogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
