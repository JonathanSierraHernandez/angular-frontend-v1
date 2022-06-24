import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutAddComponent } from './inout-add.component';

describe('InoutAddComponent', () => {
  let component: InoutAddComponent;
  let fixture: ComponentFixture<InoutAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoutAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InoutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
