import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTaskListComponent } from './complete-task-list.component';

describe('CompleteTaskListComponent', () => {
  let component: CompleteTaskListComponent;
  let fixture: ComponentFixture<CompleteTaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteTaskListComponent]
    });
    fixture = TestBed.createComponent(CompleteTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
