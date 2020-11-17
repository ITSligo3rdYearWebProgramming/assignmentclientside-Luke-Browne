import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadoutRowComponent } from './loadout-row.component';

describe('LoadoutRowComponent', () => {
  let component: LoadoutRowComponent;
  let fixture: ComponentFixture<LoadoutRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadoutRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadoutRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
