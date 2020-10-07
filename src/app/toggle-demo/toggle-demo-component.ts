import { Component } from "@angular/core";
import { environment } from "../../environments/environment";


@Component({
  selector: "toggle-demo",
  templateUrl: "./toggle-demo-component.html"
})
export class ToggleDemoComponent {
  toggleDefaultSetting: boolean;
  constructor() {
    this.toggleDefaultSetting = environment.isToggleOn;
  }
}
