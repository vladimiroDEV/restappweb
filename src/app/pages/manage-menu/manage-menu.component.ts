import { Component, OnInit, Input} from '@angular/core';
import {ManageMenuService}  from './manage-menu.service'
import {Menu} from './classes/Menu'
import {SectionMenu} from './classes/SectionMenu'
import {Observable}  from 'rxjs/Observable'



@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.scss'],
  providers: [ManageMenuService],
 
  
})

export class ManageMenuComponent implements OnInit {

  
 title = "Menu";
 isLoading = true;
 selectedMenu :Menu;
 Sections: SectionMenu[];

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

    this.selectedMenu = menu;
    this.Sections = menu.Sections;
    console.log("event  "+menu.Title);
  }

}





