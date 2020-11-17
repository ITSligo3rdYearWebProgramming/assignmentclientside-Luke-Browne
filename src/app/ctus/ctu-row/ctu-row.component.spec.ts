import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtuRowComponent } from './ctu-row.component';

describe('CtuRowComponent', () => {
  let component: CtuRowComponent;
  let fixture: ComponentFixture<CtuRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtuRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtuRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
