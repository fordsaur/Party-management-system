import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormPartyComponent } from './new-form-party.component';

describe('NewFormPartyComponent', () => {
  let component: NewFormPartyComponent;
  let fixture: ComponentFixture<NewFormPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFormPartyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFormPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
