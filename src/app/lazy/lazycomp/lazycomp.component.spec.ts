import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycompComponent } from './lazycomp.component';

describe('LazycompComponent', () => {
  let component: LazycompComponent;
  let fixture: ComponentFixture<LazycompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazycompComponent]
    });
    fixture = TestBed.createComponent(LazycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
