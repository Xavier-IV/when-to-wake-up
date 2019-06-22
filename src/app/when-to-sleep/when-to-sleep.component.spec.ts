import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenToSleepComponent } from './when-to-sleep.component';

describe('WhenToSleepComponent', () => {
  let component: WhenToSleepComponent;
  let fixture: ComponentFixture<WhenToSleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenToSleepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenToSleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
