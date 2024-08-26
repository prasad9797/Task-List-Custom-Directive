import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  TASKS = [
    {
      id: 1,
      title: 'Design Homepage Layout',
      description:
        'Create wireframes and a mockup for the new homepage layout.',
      dueDate: new Date('2024-08-20'),
      status: 'Incomplete',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Update User Profile Feature',
      description:
        'Enhance the user profile page with new fields and validation.',
      dueDate: new Date('2024-08-15'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Fix Bugs in Task Management Module',
      description: 'Resolve the bugs reported in the task management module.',
      dueDate: new Date('2024-08-10'),
      status: 'Completed',
      priority: 'High',
    },
    {
      id: 4,
      title: 'Develop Notification System',
      description: 'Implement a notification system for task updates.',
      dueDate: new Date('2024-08-18'),
      status: 'Incomplete',
      priority: 'Low',
    },
    {
      id: 5,
      title: 'Code Review for Authentication Module',
      description:
        'Conduct a code review for the recently developed authentication module.',
      dueDate: new Date('2024-08-12'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: 6,
      title: 'Prepare Sprint Review Presentation',
      description:
        'Compile a presentation for the upcoming sprint review meeting.',
      dueDate: new Date('2024-08-17'),
      status: 'Incomplete',
      priority: 'High',
    },
    {
      id: 7,
      title: 'Write Unit Tests for API Endpoints',
      description:
        'Write and run unit tests for the newly created API endpoints.',
      dueDate: new Date('2024-08-13'),
      status: 'Completed',
      priority: 'Medium',
    },
    {
      id: 8,
      title: 'Optimize Database Queries',
      description:
        'Improve the performance of the database queries used in the reporting module.',
      dueDate: new Date('2024-08-25'),
      status: 'Incomplete',
      priority: 'High',
    },
    {
      id: 9,
      title: 'Document API Specifications',
      description: 'Create detailed documentation for all API endpoints.',
      dueDate: new Date('2024-08-22'),
      status: 'Incomplete',
      priority: 'Low',
    },
    {
      id: 10,
      title: 'Conduct User Testing',
      description:
        'Arrange and oversee user testing sessions for the new features.',
      dueDate: new Date('2024-08-19'),
      status: 'In Progress',
      priority: 'High',
    },
  ];

  getData() {
    return of(this.TASKS);
  }
}