import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncetimeOperatorComponent } from './debouncetime-operator.component';

describe('DebouncetimeOperatorComponent', () => {
  let component: DebouncetimeOperatorComponent;
  let fixture: ComponentFixture<DebouncetimeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouncetimeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncetimeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
