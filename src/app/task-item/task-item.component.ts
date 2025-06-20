import { Component, Input } from "@angular/core";
import { UserTask } from "../types";

@Component({
  selector: "app-task-item",
  standalone: true,
  imports: [],
  templateUrl: "./task-item.component.html",
  styleUrl: "./task-item.component.css",
})
export class TaskItemComponent {
  @Input({ required: true }) userTask!: UserTask;

  onClickComplete() {
    console.log(this.userTask);
  }
}
