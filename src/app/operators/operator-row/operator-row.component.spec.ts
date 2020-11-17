import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorRowComponent } from './operator-row.component';

describe('OperatorRowComponent', () => {
  let component: OperatorRowComponent;
  let fixture: ComponentFixture<OperatorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
