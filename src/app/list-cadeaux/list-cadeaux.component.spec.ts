import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCadeauxComponent } from './list-cadeaux.component';

describe('ListCadeauxComponent', () => {
  let component: ListCadeauxComponent;
  let fixture: ComponentFixture<ListCadeauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCadeauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCadeauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
