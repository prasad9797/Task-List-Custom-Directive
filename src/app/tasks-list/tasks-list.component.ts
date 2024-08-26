import { Component, OnInit } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { TaskListService } from '../services/task-list.service';
import { FilteredTasksPipe } from '../pipes/filtered-tasks.pipe';
import { PastDueDateDirective } from '../directives/past-due-date.directive';
import { HoverEffectDirective } from '../directives/hover-effect.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    DatePipe,
    FilteredTasksPipe,
    PastDueDateDirective,
    HoverEffectDirective,
    CommonModule,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent implements OnInit {
  selectedTaskStatus: string = '';
  tasksList$!: Observable<any>;

  constructor(private taskListService: TaskListService) {}

  ngOnInit() {
    this.tasksList$ = this.taskListService.getData();
  }

  taskStatus(status?: string) {
    if (status === 'completed') this.selectedTaskStatus = 'Completed';
    else if (status === 'inprogress') this.selectedTaskStatus = 'In Progress';
    else if (status === 'incompleted') this.selectedTaskStatus = 'Incomplete';
    else this.selectedTaskStatus = '';
  }

  setTaskPriorityColor(priority: string) {
    if (priority === 'High') return 'color: red';
    else if (priority === 'Medium') return 'color: orange';
    else return 'color: blue';
  }
}
