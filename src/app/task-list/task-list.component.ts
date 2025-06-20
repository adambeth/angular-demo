import { Component, Input } from "@angular/core";
import { User, Task } from "../types";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css",
})
export class TaskListComponent {
  @Input({ required: true }) user?: User;
  @Input({ required: true }) userTasks?: Task;

  get getUserTasks() {
    return 
  }
}
