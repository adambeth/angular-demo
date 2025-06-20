import { Component, Input } from "@angular/core";
import { User, UserTask } from "../types";
import { TaskItemComponent } from "../task-item/task-item.component";
import { dummyTasks } from "../dummy-tasks";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css",
})
export class TaskListComponent {
  @Input({ required: true }) user!: User;

  get userTasks(): UserTask[] {
    return dummyTasks.filter((task) => this.user.id === task.userId);
  }
  onAddTask() {
    console.log(this.userTasks);
  }
}
