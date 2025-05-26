import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPollComponent } from './card-poll.component';

describe('CardPollComponent', () => {
  let component: CardPollComponent;
  let fixture: ComponentFixture<CardPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
