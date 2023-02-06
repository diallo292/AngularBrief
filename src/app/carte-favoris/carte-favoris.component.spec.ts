import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFavorisComponent } from './carte-favoris.component';

describe('CarteFavorisComponent', () => {
  let component: CarteFavorisComponent;
  let fixture: ComponentFixture<CarteFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteFavorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
