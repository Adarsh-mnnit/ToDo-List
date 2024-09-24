import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Task } from '../task.interface';
import { TaskActions } from '../task-action.enum';

@Component({
  selector: 'app-complete-task-list',
  templateUrl: './complete-task-list.component.html',
  styleUrls: ['./complete-task-list.component.scss']
})
export class CompleteTaskListComponent {
  @Input() completeTaskList: Task[] = [];
  @Output() action = new EventEmitter();
  onDelete(task: Task) {
    this.action.emit({ 'action': TaskActions.Delete, task });
  }
}
