import {
  Component,
  Output,
  EventEmitter,
  input,
  computed,
  Input,
  output,
} from "@angular/core";
import { User } from "../types";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() selected = new EventEmitter<User>();
  // user = input.required<User>();
  // selected = output<User>();
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  // imagePath = computed(() => `assets/users/${this.user.avatar}`);

  onSelectUserEmit() {
    this.selected.emit(this.user);
  }
}
