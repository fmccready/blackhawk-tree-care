import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();
  private goTo(id){
    var target = document.getElementById(id),
      container = document.getElementsByClassName('mat-sidenav-content'),
      top = target.offsetTop;
    container[0].scrollTop = top - 64;
    this.closeMenu.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
