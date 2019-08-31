import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubcribeCardComponent } from './unsubcribe-card.component';

describe('UnsubcribeCardComponent', () => {
  let component: UnsubcribeCardComponent;
  let fixture: ComponentFixture<UnsubcribeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubcribeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubcribeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
