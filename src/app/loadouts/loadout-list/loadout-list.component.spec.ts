import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadoutListComponent } from './loadout-list.component';

describe('LoadoutListComponent', () => {
  let component: LoadoutListComponent;
  let fixture: ComponentFixture<LoadoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadoutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
