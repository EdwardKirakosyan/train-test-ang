import { Component, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-group.interface';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;
}
