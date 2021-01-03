import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ExampleComponent } from "./example.component";
import { NumberDirective } from "./number.directive";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [NumberDirective, AppComponent, ExampleComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
