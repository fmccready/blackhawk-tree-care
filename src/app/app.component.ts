import { Component } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isMobile = true;
  mode = 'over';
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/menu.svg')
    )
  }
  ngOnInit(){
    let width = window.screen.width;
    console.log('init');
    if (width > 992){
      this.mode = 'side';
    }
  }
}
