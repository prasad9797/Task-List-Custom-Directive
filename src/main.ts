import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TasksListComponent } from './app/tasks-list/tasks-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasksListComponent],
  template: `
    <app-tasks-list>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
