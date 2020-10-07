import { Component, Input, OnInit } from "@angular/core";
import { AngularAnimation } from "../animation/animation";
@Component({
  selector: "switch",
  templateUrl: "./switch.component.html",
  animations: [AngularAnimation]
})
export class SwitchComponent implements OnInit {
  @Input() isChecked: boolean;

  showProgress: boolean = false;
  showText: string = "Devices Off";
  canShowWarn: boolean = true;
  canShowPrimary: boolean = false;
  colorClass: string = "warn";
  spinnerClass: string = "mat-off-progress";
  isShowLoader: boolean = false;
  isOff:boolean;
  constructor() { }

  ngOnInit() {
   this.isOff= !this.isChecked;
   if(this.isOff){
    this.colorClass = "warn";
    this.spinnerClass = "mat-off-progress";
    this.showTextAndLoader("Devices Off");        
    this.isOff=false;      
    this.isChecked = true; 
   }
  else if(!this.isOff){
    this.colorClass = "primary";
    this.spinnerClass = "mat-on-progress";
    this.showTextAndLoader("Devices On");          
    this.isOff=true;   
    this.isChecked = false;      
  }
  }

  showTextAndLoader(showText: string) {
    setTimeout(() => {
      this.showText = showText;
      this.showProgress = false;
      this.isShowLoader = false;
    }, 1500);
  }
  onClick() {
    this.showProgress = true;
    this.colorClass = "progress";
    this.isShowLoader = true;
    this.showText = "Please Wait...";

      this.colorClass = "primary";
      this.spinnerClass = "mat-on-progress";
      this.showTextAndLoader("Devices On");
    setTimeout(() => {          
          this.isOff=true;
      } , 1540);
      setTimeout(() => {       
           this.isChecked = false;      
    }, 1500);
  }
  onClick1() {
    this.showProgress = true;
    this.colorClass = "progress";
    this.isShowLoader = true;
    this.showText = "Please Wait...";    
      
     this.colorClass = "warn";
      this.spinnerClass = "mat-off-progress";
      this.showTextAndLoader("Devices Off");
      setTimeout(() => {          
          this.isOff=false;
      } , 1540);
      setTimeout(() => {       
           this.isChecked = true;      
    }, 1500);
  }
}
