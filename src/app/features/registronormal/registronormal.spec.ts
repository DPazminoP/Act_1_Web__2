import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registronormal } from './registronormal';

describe('Registronormal', () => {
  let component: Registronormal;
  let fixture: ComponentFixture<Registronormal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registronormal],
    }).compileComponents();

    fixture = TestBed.createComponent(Registronormal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
