import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutUpdateComponent } from './inout-update.component';

describe('InoutUpdateComponent', () => {
  let component: InoutUpdateComponent;
  let fixture: ComponentFixture<InoutUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoutUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InoutUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
