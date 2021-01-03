import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Self
} from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: "input[rutTxt]"
})
export class NumberDirective implements Validator {
  @Input("rutTxt") fControl: AbstractControl;
  elR: ElementRef;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    this.fControl = control;
    return null;
  }

  @HostListener("input")
  onChange() {
    console.log("onChange");
    console.log(this.fControl);
    console.log(this.fControl.value);
    let str: string = this.fControl.value;
    if (str.indexOf("-") > 0) {
    } else {
      this.fControl.setValue(this.fControl.value + "-1");
    }
  }
}
