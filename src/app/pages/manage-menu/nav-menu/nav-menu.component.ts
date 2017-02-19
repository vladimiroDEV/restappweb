import { Component, OnInit, Input } from '@angular/core';
import {ManageMenuService}  from '../manage-menu.service'

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  providers:[ManageMenuService]
})
export class NavMenuComponent implements OnInit {

  title ="Lista menu";
  menuList;
  
 @Input() SelectedMenu;

  constructor(manageMenuService  :ManageMenuService ) {
    this.menuList = manageMenuService.getMenu();
   }
  ngOnInit() {
  }

  selectMenu(menu) {

    this.SelectedMenu = menu;
    console.log("event  "+menu);
  }
  onClickButton($event) {
    console.log($event);
  }

}
