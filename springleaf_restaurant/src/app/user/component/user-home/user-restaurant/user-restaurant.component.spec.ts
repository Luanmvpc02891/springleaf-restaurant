import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestaurantComponent } from './user-restaurant.component';

describe('UserRestaurantComponent', () => {
  let component: UserRestaurantComponent;
  let fixture: ComponentFixture<UserRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRestaurantComponent]
    });
    fixture = TestBed.createComponent(UserRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
