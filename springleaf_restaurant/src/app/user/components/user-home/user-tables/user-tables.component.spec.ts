import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTablesComponent } from './user-tables.component';

describe('UserTableComponent', () => {
  let component: UserTablesComponent;
  let fixture: ComponentFixture<UserTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTablesComponent]
    });
    fixture = TestBed.createComponent(UserTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
