import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductDetailComponent } from './user-product-detail.component';

describe('UserProductDetailComponent', () => {
  let component: UserProductDetailComponent;
  let fixture: ComponentFixture<UserProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProductDetailComponent]
    });
    fixture = TestBed.createComponent(UserProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
