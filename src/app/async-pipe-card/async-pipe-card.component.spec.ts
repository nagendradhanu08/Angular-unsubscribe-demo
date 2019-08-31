import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeCardComponent } from './async-pipe-card.component';

describe('AsyncPipeCardComponent', () => {
  let component: AsyncPipeCardComponent;
  let fixture: ComponentFixture<AsyncPipeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
