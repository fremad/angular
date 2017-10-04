import { Component, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('sidenav') public myNav: MdSidenav;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    let x = event.charCode;
    if (x === 111) {
      this.myNav.toggle();
    }
  }
}
