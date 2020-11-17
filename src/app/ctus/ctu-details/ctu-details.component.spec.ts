import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtuDetailsComponent } from './ctu-details.component';

describe('CtuDetailsComponent', () => {
  let component: CtuDetailsComponent;
  let fixture: ComponentFixture<CtuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
