import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquecComponent } from './historiquec.component';

describe('HistoriquecComponent', () => {
  let component: HistoriquecComponent;
  let fixture: ComponentFixture<HistoriquecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriquecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
