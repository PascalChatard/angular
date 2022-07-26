import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoffComponent } from './logoff.component';

describe('LogoffComponent', () => {
  let component: LogoffComponent;
  let fixture: ComponentFixture<LogoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
