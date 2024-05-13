import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task-create/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-edit-task',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
  imports:[FormsModule,CommonModule]
})
export class EditTaskComponent {
  @Input() task: Task | undefined;
  @Output() saveTask: EventEmitter<Task> = new EventEmitter<Task>();

  onSave(): void {
    this.saveTask.emit(this.task);
  }
}

