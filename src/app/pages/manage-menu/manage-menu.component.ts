import { Component, OnInit, Input} from '@angular/core';
import {ManageMenuService}  from './manage-menu.service'
import {Menu} from './classes/Menu'
import {Observable}  from 'rxjs/Observable'



@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.scss'],
  providers: [ManageMenuService],
 
  
})

export class ManageMenuComponent implements OnInit {

   @Input() SelectedMenu;
 title = "Menu";
 isLoading = true;

  menuList : Menu[];

  constructor(private _manageMenuService  :ManageMenuService ) {
    this._manageMenuService.createMenu(new Menu);

  

  }

  ngOnInit() {
    this._manageMenuService.getMenuList()
    .subscribe(menu => {
      
      this.isLoading = false;
    
      console.log(menu)});

    this._manageMenuService.getMenuList().subscribe(menuList => this.menuList= menuList);
  }

  selectMenu(menu) {

    this.SelectedMenu = menu;
    console.log("event  "+menu);
  }

}





