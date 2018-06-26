import { Directive, HostListener, OnInit, HostBinding } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';
@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective {

  public counter:number = 0;
  constructor() { 
    
  }

  @HostBinding('style.color') mycolor:string;

  @HostListener('click', ['$event'])  
  clickEvent(event) {
    this.mycolor = "#" + Math.floor(Math.random()*967745);
    this.counter++;
    console.log(this.counter);
    
  }
  
}