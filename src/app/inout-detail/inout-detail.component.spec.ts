import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutDetailComponent } from './inout-detail.component';

describe('InoutDetailComponent', () => {
  let component: InoutDetailComponent;
  let fixture: ComponentFixture<InoutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoutDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
