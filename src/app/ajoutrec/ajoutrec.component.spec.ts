import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrecComponent } from './ajoutrec.component';

describe('AjoutrecComponent', () => {
  let component: AjoutrecComponent;
  let fixture: ComponentFixture<AjoutrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutrecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
