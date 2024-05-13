import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../task-create/task.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private editTaskModalOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public editTaskModalOpen$: Observable<boolean> = this.editTaskModalOpenSubject.asObservable();

  constructor() {}

  openEditTaskModal(task: Task): void {
    this.editTaskModalOpenSubject.next(true);
  }

  closeEditTaskModal(): void {
    this.editTaskModalOpenSubject.next(false);
  }
}
