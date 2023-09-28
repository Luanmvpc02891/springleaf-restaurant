import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventComponent } from './UserEventComponent';

describe('UserEventComponent', () => {
  let component: UserEventComponent;
  let fixture: ComponentFixture<UserEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEventComponent]
    });
    fixture = TestBed.createComponent(UserEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
