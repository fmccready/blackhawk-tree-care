import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blackhawk Tree Care';
  isMobile = true;
  mode = 'over';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    let fbParams: {
      appId: '1345121855544157',
      xfbml: true,
      version: 'v2.6'
    };

    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/menu.svg')
    )
  }
  ngOnInit(){
    let width = window.screen.width;
    if (width > 992){
      this.mode = 'side';
    }
  }
}
