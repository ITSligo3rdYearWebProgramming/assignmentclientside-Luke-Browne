import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtuListComponent } from './ctu-list.component';

describe('CtuListComponent', () => {
  let component: CtuListComponent;
  let fixture: ComponentFixture<CtuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
