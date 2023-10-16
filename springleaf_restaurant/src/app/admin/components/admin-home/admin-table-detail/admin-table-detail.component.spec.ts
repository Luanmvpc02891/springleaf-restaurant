import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableDetailComponent } from './admin-table-detail.component';

describe('AdminTableDetailComponent', () => {
  let component: AdminTableDetailComponent;
  let fixture: ComponentFixture<AdminTableDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTableDetailComponent]
    });
    fixture = TestBed.createComponent(AdminTableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
