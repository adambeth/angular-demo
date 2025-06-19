import { bootstrapApplication } from "@angular/platform-browser";
import { HeaderComponent } from "./app/header/header.component";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent).catch((err) => console.error(err));
