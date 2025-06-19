import { Component, EventEmitter, Output } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TaskListComponent } from "./task-list/task-list.component";
import { User } from "./types";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User;

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
