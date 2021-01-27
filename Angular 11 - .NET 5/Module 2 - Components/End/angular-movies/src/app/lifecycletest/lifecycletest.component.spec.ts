import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycletestComponent } from './lifecycletest.component';

describe('LifecycletestComponent', () => {
  let component: LifecycletestComponent;
  let fixture: ComponentFixture<LifecycletestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycletestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
