import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId = 3;
  todoList = [
    {
      id:1,'task':"Task1"
    },
    {
      id:2,'task':"Task2"
    }
  ]

  constructor() { }
  addTodo(taskName: any) {
    this.todoList.push({"id":this.taskId++, 'task':taskName})
  }
  remove(index: any){
    this.todoList.splice(index, 1);
  }
}
