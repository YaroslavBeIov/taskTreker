import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
  imports:[FormsModule,CommonModule]
})
export class TaskCreateComponent {
  task: Task = {
    title: '',
    description: '',
    deadline: '',
    priority: 'низкий',
    status: 'сделать',
    assignees: [],
    id: undefined
  };

  constructor(private taskService: TaskService) {}

  onSubmit() {
    this.taskService.createTask(this.task);
    this.task = {
      title: '',
      description: '',
      deadline: '',
      priority: 'низкий',
      status: 'сделать',
      assignees: [],
      id: undefined
    };
  }
}
