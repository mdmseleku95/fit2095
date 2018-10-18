import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmovieToactorComponent } from './addmovie-toactor.component';

describe('AddmovieToactorComponent', () => {
  let component: AddmovieToactorComponent;
  let fixture: ComponentFixture<AddmovieToactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmovieToactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmovieToactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
