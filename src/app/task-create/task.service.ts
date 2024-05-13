import { Injectable } from '@angular/core';
import { Task } from './task.model';

const TASKS_STORAGE_KEY = 'tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  private generateId(): number {
    const tasks = this.getTasks();
    if (tasks.length === 0) {
      return 1;
    } else {
      const lastTask = tasks[tasks.length - 1];
      return lastTask.id + 1;
    }
  }

  getTasks(): Task[] {
    const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }

  createTask(task: Task): void {
    task.id = this.generateId();
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      this.saveTasks(tasks);
    }
  }

  deleteTask(taskId: number): void {
    let tasks = this.getTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    this.saveTasks(tasks);
  }
}

