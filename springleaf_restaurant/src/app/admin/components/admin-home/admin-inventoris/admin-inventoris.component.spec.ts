import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventorisComponent } from './admin-inventoris.component';

describe('AdminInventorisComponent', () => {
  let component: AdminInventorisComponent;
  let fixture: ComponentFixture<AdminInventorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInventorisComponent]
    });
    fixture = TestBed.createComponent(AdminInventorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
