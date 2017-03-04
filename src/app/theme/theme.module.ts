import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule.forRoot(),
   
  ],
  exports: [
    TopNavbarComponent
  ],
  declarations: [ TopNavbarComponent,]
})
export class ThemeModule { }
