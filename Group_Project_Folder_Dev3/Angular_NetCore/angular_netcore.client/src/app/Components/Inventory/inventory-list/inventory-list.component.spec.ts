import { ComponentFixture, TestBed } from '@angular/core/testing';

import { inventoryListComponent } from './inventory-list.component';

describe('inventoryListComponent', () => {
  let component: inventoryListComponent;
  let fixture: ComponentFixture<inventoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [inventoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(inventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
