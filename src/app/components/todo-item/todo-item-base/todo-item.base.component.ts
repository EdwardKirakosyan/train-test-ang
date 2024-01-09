import { Directive, Input } from '@angular/core';
import { TodoItem } from '../../../interfaces/todo-group.interface';

@Directive({})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;
}
