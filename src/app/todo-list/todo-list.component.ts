import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.interface';
import { TaskActions } from '../task-action.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() taskList: Task[] = [];
  @Output() action = new EventEmitter<any>();

  onComplete(task: Task) {
    this.action.emit({ 'action': TaskActions.Complete, task });
  }

  onDelete(task: Task) {
    this.action.emit({ 'action': TaskActions.Delete, task });
  }
}
