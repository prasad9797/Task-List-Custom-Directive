import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteredTasks',
  standalone: true,
})
export class FilteredTasksPipe implements PipeTransform {
  transform(value: any, filter: string): any {
    if (filter === '') return value;
    else return value.filter((val: any) => val.status === filter);
  }
}
