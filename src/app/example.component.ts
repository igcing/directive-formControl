import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "example",
  templateUrl: "./example.component.html"
})
export class ExampleComponent {
  formControl = new FormControl("");
  form = new FormGroup({
    rutTxt: this.formControl
  });

  public submit() {
    console.log(this.form.get("rutTxt").value);
  }
}
