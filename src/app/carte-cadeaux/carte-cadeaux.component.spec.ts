import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteCadeauxComponent } from './carte-cadeaux.component';

describe('CarteCadeauxComponent', () => {
  let component: CarteCadeauxComponent;
  let fixture: ComponentFixture<CarteCadeauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteCadeauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteCadeauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
