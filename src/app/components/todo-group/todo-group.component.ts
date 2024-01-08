import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.scss',
})
export class TodoGroupComponent {}
