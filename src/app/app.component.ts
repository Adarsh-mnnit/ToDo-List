import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Task } from './task.interface';
import { TaskActions } from './task-action.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoName: string = "";
  taskList: Task[] = [];
  completeTask: Task[] = [];
  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.taskList = this.todoService.getTaskList();
    this.completeTask = this.todoService.getCompleteTaskList();
  }


  onAddTask() {
    if (this.todoName.trim()) {
      let task: Task = {
        taskId: this.todoService.getNextTaskId(),
        name: this.todoName,
        isComplete: false
      }
      this.todoName = "";
      this.todoService.addTodoTask(task);
      this.taskList = this.todoService.getTaskList();
    }
  }
  onTaskActions(event: any) {
    switch (event.action) {
      case TaskActions.Complete:
        this.todoService.addCompleteTask(event.task);
        this.taskList = this.todoService.getTaskList();
        this.completeTask = this.todoService.getCompleteTaskList();
        break;
      case TaskActions.Delete:
        this.todoService.deleteTodoTask(event.task);
        this.taskList = this.todoService.getTaskList();
        this.completeTask = this.todoService.getCompleteTaskList();
        break;
    }

  }
}
