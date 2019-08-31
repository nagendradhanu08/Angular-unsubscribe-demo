import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilCardComponent } from './take-until-card.component';

describe('TakeUntilCardComponent', () => {
  let component: TakeUntilCardComponent;
  let fixture: ComponentFixture<TakeUntilCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeUntilCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
