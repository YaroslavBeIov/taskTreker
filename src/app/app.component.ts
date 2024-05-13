import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router){}
  
  redirectToTasks() {
    this.router.navigate(['/сreate-task']);
  }
  redirectToMainMenu() {
    this.router.navigate(['/task-main']);
  }
  redirectToAllTasks() {
    this.router.navigate(['/task-all']);
  }
}
