import { Component, OnInit, Input } from '@angular/core';
import {Menu} from '../classes/Menu'
import {SectionMenu} from '../classes/SectionMenu'

@Component({
  selector: 'detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})

export class DetailMenuComponent implements OnInit {
@Input() 
sections: SectionMenu[];
@Input()
currentMenu : Menu;
  constructor() { }

  ngOnInit() {
  }

}
