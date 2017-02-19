import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})

export class DetailMenuComponent implements OnInit {
@Input() selectedMenu;
  constructor() { }

  ngOnInit() {
  }

}
