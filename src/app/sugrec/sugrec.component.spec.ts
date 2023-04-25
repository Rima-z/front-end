import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugrecComponent } from './sugrec.component';

describe('SugrecComponent', () => {
  let component: SugrecComponent;
  let fixture: ComponentFixture<SugrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugrecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
