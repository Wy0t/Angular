import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // 改成物件陣列，包含任務內容和時間戳記
  tasks: { task: string, timestamp: string }[] = [];
  newTask: string = '';

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      // 預設任務帶有時間戳記
      this.tasks = [
        { task: '學習Angular', timestamp: new Date().toLocaleString() },
      ];
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      // 新增任務時記錄當前時間
      const timestamp = new Date().toLocaleString(); // 格式化為本地時間
      this.tasks.push({ task: this.newTask, timestamp }); // 新增任務到 tasks 陣列
      this.newTask = ''; //清空輸入框
      this.saveTasks(); // 保存任務到 localStorage
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}