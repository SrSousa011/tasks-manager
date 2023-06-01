import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  tasksList: any[] = [];

  constructor(){}

  
 ngOnInit(): void {
    this.tasksList = [
      { id: 1, name: 'Work out', completed: false },
      { id: 2, name: 'Learn and explore new skills', completed: true },
      { id: 3, name: 'Collaborate with team members', completed: true },
      { id: 4, name: 'Check and respond to emails', completed: true },
      { id: 5, name: 'Attend meetings and collaborate with colleagues', completed: true },
      { id: 6, name: 'Work on assigned tasks or projects', completed: true },
      { id: 7, name: 'Collaborate witth team member', completed: true },
      { id: 8, name: 'Review and Update project status', completed: true },
      { id: 9, name: 'Reflect and plan for the next da', completed: true },
      { id: 10, name: 'Plan and prioritize tasks for the day', completed: true }
    ];
  } 
  add(addNewTask: string){
    if(addNewTask.trim().length == 0){
      return;
    }

    const existingTask = this.tasksList.find(item => item.name.toLowerCase() == addNewTask.toLowerCase())

    if (!existingTask){
    this.tasksList.push({id: this.tasksList.length, name: addNewTask, completed: false})
    }
  }

delete(id: number) {
  this.tasksList = this.tasksList.filter(task => task.id !== id);
}
}
