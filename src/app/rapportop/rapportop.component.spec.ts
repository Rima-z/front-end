import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportopComponent } from './rapportop.component';

describe('RapportopComponent', () => {
  let component: RapportopComponent;
  let fixture: ComponentFixture<RapportopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
