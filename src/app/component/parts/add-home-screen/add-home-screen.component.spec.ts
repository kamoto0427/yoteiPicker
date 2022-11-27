import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeScreenComponent } from './add-home-screen.component';

describe('AddHomeScreenComponent', () => {
  let component: AddHomeScreenComponent;
  let fixture: ComponentFixture<AddHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHomeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
