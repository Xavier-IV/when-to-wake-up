import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenInputComponent } from './when-input.component';

describe('WhenInputComponent', () => {
  let component: WhenInputComponent;
  let fixture: ComponentFixture<WhenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
