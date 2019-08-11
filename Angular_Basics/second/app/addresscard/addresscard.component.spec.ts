import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresscardComponent } from './addresscard.component';

describe('AddresscardComponent', () => {
  let component: AddresscardComponent;
  let fixture: ComponentFixture<AddresscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
