import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  TAREFA_KEY = 'tarefa_key'
  tasksList : any[] = []
  constructor() { }

  ngOnInit(): void {
     const tasks = localStorage.getItem(this.TAREFA_KEY)
    if (tasks){
      this.tasksList = JSON.parse(tasks)
    }
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

  complete(id: number) {
    const taskFound = this.tasksList.find( item => item.id == id)

    if (taskFound){
      taskFound.completed = !taskFound.completed
      this.saveList()
    }

  deleteSelected() {
    this.tasksList = this.tasksList.filter((task) => !task.selected);
    this.saveList();
  }

  }
   private saveList(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.tasksList))
  }

}
