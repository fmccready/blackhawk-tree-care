import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatButtonModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatRippleModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
