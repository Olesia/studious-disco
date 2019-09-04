import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsItemComponent } from './manage-products-item.component';

describe('ManageProductsItemComponent', () => {
  let component: ManageProductsItemComponent;
  let fixture: ComponentFixture<ManageProductsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProductsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
