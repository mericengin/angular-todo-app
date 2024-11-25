import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  taskInput: string = '';
  tasks: { name: string, completed: boolean }[] = [];

  addTask() {
    if (this.taskInput.trim()) {
      this.tasks.push({
        name: this.taskInput,
        completed: false
      });
      this.taskInput = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1)
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  clear() {
    this.tasks = [];
  }
}