import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeWhileCardComponent } from './take-while-card.component';

describe('TakeWhileCardComponent', () => {
  let component: TakeWhileCardComponent;
  let fixture: ComponentFixture<TakeWhileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeWhileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeWhileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
