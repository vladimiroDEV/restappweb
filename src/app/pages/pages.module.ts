import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { ThemeModule }  from '../theme/theme.module';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { HomeComponent } from './home/home.component'
import { MaterialModule } from '@angular/material';
import { NavMenuComponent } from './manage-menu/nav-menu/nav-menu.component';
import { TestComponent } from './test/test.component';
import { AutoGrowDirective } from './test/auto-grow.directive';
import { DetailMenuComponent } from './manage-menu/detail-menu/detail-menu.component';



const appRoutes: Routes = [
  { path: 'gestione-menu', component: ManageMenuComponent },
   { path: 'home', component: HomeComponent },
    { path: 'test', component: TestComponent },
  
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
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
    NavMenuComponent,
    TestComponent,
    AutoGrowDirective,
    DetailMenuComponent,
  ]
})
export class PagesModule { }

