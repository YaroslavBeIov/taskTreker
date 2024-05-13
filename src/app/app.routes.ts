import { Routes } from '@angular/router';
import { TaskCreateComponent } from './task-create/task-create.component';
import { AppComponent } from './app.component';
import { TaskMainComponent } from './task-main/task-main.component';
import { AllTasksComponent } from './task-all/task-all.component';

export const routes: Routes = [
    {
        path:"сreate-task",
        component: TaskCreateComponent
    },
    {
        path:"task-main",
        component: TaskMainComponent,
    },
    {
        path:"task-all",
        component: AllTasksComponent,
    }
];
