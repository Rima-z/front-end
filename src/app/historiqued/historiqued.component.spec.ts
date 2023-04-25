import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquedComponent } from './historiqued.component';

describe('HistoriquedComponent', () => {
  let component: HistoriquedComponent;
  let fixture: ComponentFixture<HistoriquedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriquedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
