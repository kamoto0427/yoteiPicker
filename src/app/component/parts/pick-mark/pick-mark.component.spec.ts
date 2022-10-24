import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickMarkComponent } from './pick-mark.component';

describe('PickMarkComponent', () => {
  let component: PickMarkComponent;
  let fixture: ComponentFixture<PickMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickMarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
