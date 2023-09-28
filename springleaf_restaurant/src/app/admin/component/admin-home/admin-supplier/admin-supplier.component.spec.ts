import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupplierComponent } from './admin-supplier.component';

describe('AdminSupplierComponent', () => {
  let component: AdminSupplierComponent;
  let fixture: ComponentFixture<AdminSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSupplierComponent]
    });
    fixture = TestBed.createComponent(AdminSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
