import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
    this.loadData();
   }
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

  loadData(){
    const com_task = localStorage.getItem('com_task'); // Retrieve tasks from local storage
    if (com_task) {
      this.completeTaskList = JSON.parse(com_task); // Parse and load tasks into the tasks array
    }
    const tasks= localStorage.getItem('tasks');
    if(tasks){
      this.todoTaskList=JSON.parse(tasks);
    }
    const id = localStorage.getItem('nextId');
    if(id){
      this.nextTaskId=JSON.parse(id);
    }
  }

  updateLocalData(){
    localStorage.setItem('tasks', JSON.stringify(this.todoTaskList));
    localStorage.setItem('com_task',JSON.stringify(this.completeTaskList));
    localStorage.setItem("nextId",JSON.stringify(this.nextTaskId));
  }
  getNextTaskId() {
    return this.nextTaskId++;
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
    this.updateLocalData();
  }

  addCompleteTask(task: Task) {
    task.isComplete = true;
    this.todoTaskList = this.todoTaskList.filter(t => t.taskId != task.taskId);
    this.completeTaskList.push(task);
    this.updateLocalData();
  }

  deleteTodoTask(task: Task) {
    this.todoTaskList = this.todoTaskList.filter(t => t.taskId != task.taskId);
    this.completeTaskList = this.completeTaskList.filter(t => t.taskId != task.taskId);
    this.updateLocalData();
  }
}
