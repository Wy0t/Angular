import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TodoListComponent], // 引入 TodoListComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
}