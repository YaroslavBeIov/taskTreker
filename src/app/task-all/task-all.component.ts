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
  selectedStatus: string = 'all'; // Выбранный статус для фильтрации
  selectedAssignee: string = 'all'; // Выбранный исполнитель для фильтрации

  constructor(private taskService: TaskService, private modalService: ModalService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
  }

  editTask(task: Task): void {
    // Открываем модальное окно для редактирования задачи
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

  // Функция для применения фильтров
  applyFilters() {
    this.filteredTasks = this.tasks.filter(task => {
      // Применяем фильтр по статусу
      if (this.selectedStatus !== 'all' && task.status !== this.selectedStatus) {
        return false;
      }
      // Применяем фильтр по исполнителю
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

}
