import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutDeleteComponent } from './inout-delete.component';

describe('InoutDeleteComponent', () => {
  let component: InoutDeleteComponent;
  let fixture: ComponentFixture<InoutDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoutDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InoutDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
