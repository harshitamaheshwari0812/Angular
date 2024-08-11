import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterwithdropdownComponent } from './filterwithdropdown.component';

describe('FilterwithdropdownComponent', () => {
  let component: FilterwithdropdownComponent;
  let fixture: ComponentFixture<FilterwithdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterwithdropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterwithdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
