import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryYoteiListComponent } from './category-yotei-list.component';

describe('CategoryYoteiListComponent', () => {
  let component: CategoryYoteiListComponent;
  let fixture: ComponentFixture<CategoryYoteiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryYoteiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryYoteiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
