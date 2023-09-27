import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  list=['21471A05D2','21471A0585','21471A05B0'];
  public udid='';
  public hide:boolean=false;
  public show:boolean=true;
  check='VALIDATE'
  public validate='validate'
  valid(){
    for (let i = 0; i < this.list.length; i++) {
      if(this.udid==this.list[i]){
            this.check='VERIFIED ✓';
            this.hide=false;
            this.validate='verified';
            console.log('verified');
            break;
      }
      else{
        this.hide=true;
      }
    }
  }
}
