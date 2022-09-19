import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoteiListComponent } from './yotei-list.component';

describe('YoteiListComponent', () => {
  let component: YoteiListComponent;
  let fixture: ComponentFixture<YoteiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoteiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoteiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
