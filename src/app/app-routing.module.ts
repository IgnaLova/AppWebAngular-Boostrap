import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importar componentes
import { InicioComponent } from './inicio/inicio.component';
import { AngularComponent } from './angular/angular.component';
import { GitComponent } from './git/git.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'angular', component:AngularComponent},
  {path: 'git',component: GitComponent},
  {path: 'terminal',component: TerminalComponent},
  {path:"",redirectTo:"/inicio", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
