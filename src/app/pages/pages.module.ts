import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { ThemeModule }  from '../theme/theme.module';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { HomeComponent } from './home/home.component'
import { MaterialModule } from '@angular/material';
import { TestComponent } from './test/test.component';
import { AutoGrowDirective } from './test/auto-grow.directive';
import { DetailMenuComponent } from './manage-menu/detail-menu/detail-menu.component';
import {HttpModule} from '@angular/http'



const appRoutes: Routes = [
  { path: 'gestione-menu', component: ManageMenuComponent },
   { path: 'home', component: HomeComponent },
    { path: 'test', component: TestComponent },
  
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    HttpModule,
    MaterialModule.forRoot(),
    
    
  
    RouterModule.forRoot(appRoutes),
  ],
   exports: [
      PagesComponent
  ],
  declarations: [
    PagesComponent,
    ManageMenuComponent,
    HomeComponent,
    TestComponent,
    AutoGrowDirective,
    DetailMenuComponent,
  ]
})
export class PagesModule { }

