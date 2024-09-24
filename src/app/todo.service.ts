import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  private nextTaskId = 5;
  private todoTaskList: Task[] = [{
    name: "Dummy task1",
    taskId: 1,
    isComplete: false
  }, {
    name: "Dummy task2",
    taskId: 2,
    isComplete: false
  }];
  private completeTaskList: Task[] = [{
    name: "Dummy task3",
    taskId: 3,
    isComplete: true
  }, {
    name: "Dummy task4",
    taskId: 4,
    isComplete: true
  }];

  getNextTaskId() {
    return ++this.nextTaskId;
  }

  getTaskList(): Task[] {
    return this.todoTaskList;
  }
  getCompleteTaskList(): Task[] {
    return this.completeTaskList;
  }


  addTodoTask(task: Task) {
    console.log("task added");
    console.log(task);
    this.todoTaskList.push(task);
  }

  addCompleteTask(task: Task) {
    task.isComplete = true;
    this.todoTaskList = this.todoTaskList.filter(t => t.taskId != task.taskId);
    this.completeTaskList.push(task);
  }

  deleteTodoTask(task: Task) {
    this.todoTaskList = this.todoTaskList.filter(t => t.taskId != task.taskId);
    this.completeTaskList = this.completeTaskList.filter(t => t.taskId != task.taskId);
  }
}
