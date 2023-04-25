import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportdentComponent } from './rapportdent.component';

describe('RapportdentComponent', () => {
  let component: RapportdentComponent;
  let fixture: ComponentFixture<RapportdentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportdentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
