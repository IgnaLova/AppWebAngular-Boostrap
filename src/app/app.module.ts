import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AngularComponent } from './angular/angular.component';
import { TerminalComponent } from './terminal/terminal.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AngularComponent,
    TerminalComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
