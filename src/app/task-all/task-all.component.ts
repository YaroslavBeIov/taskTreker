import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-create/task.service';
import { Task } from '../task-create/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalService } from './task.modal.service';

@Component({
  standalone:true,
  selector: 'app-all-tasks',
  templateUrl: './task-all.component.html',
  styleUrls: ['./task-all.component.scss'],
  imports:[FormsModule,CommonModule]
})
export class AllTasksComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  selectedStatus: string = 'all';
  selectedAssignee: string = 'all';

  constructor(private taskService: TaskService, private modalService: ModalService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
  }

  editTask(task: Task): void {
    this.modalService.openEditTaskModal(task);
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
    this.applyFilters();
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.loadTasks();
  }

  applyFilters() {
    this.filteredTasks = this.tasks.filter(task => {
      if (this.selectedStatus !== 'all' && task.status !== this.selectedStatus) {
        return false;
      }
      if (this.selectedAssignee !== 'all' && !task.assignees.includes(this.selectedAssignee)) {
        return false;
      }
      return true;
    });
  }

  sortByDeadline() {
    this.filteredTasks.sort((a, b) => {
      return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    });
  }
  updatePriority(task: Task, priority: 'низкий' | 'средний' | 'высокий') {
    task.priority = priority;
  }
  
  updateStatus(task: Task, status: 'сделать' | 'в процессе' | 'сделано') {
    task.status = status;
  }
  
}
