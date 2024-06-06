import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyListTableComponent } from './party-list-table.component';

describe('PartyListTableComponent', () => {
  let component: PartyListTableComponent;
  let fixture: ComponentFixture<PartyListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartyListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
