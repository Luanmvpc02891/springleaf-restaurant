import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComboComponent } from './user-combo.component';

describe('UserComboComponent', () => {
  let component: UserComboComponent;
  let fixture: ComponentFixture<UserComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComboComponent]
    });
    fixture = TestBed.createComponent(UserComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
