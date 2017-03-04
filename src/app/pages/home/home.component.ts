import { Component, OnInit } from '@angular/core';

 import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  spaceScreens : Array<any>;

  constructor(private http:Http) {
    this.http.get('./DataTest.json')
    .map(response => response.json().screenshots)
    .subscribe(res=> this.spaceScreens =  res);
   }

  ngOnInit() {
  }

  likeMe (i) {
    if(this.spaceScreens[i].liked== 0 )
      this.spaceScreens[i].liked=1;
      else 
      this.spaceScreens[i].liked=0;
  }

  deleteMe(i) {
    this.spaceScreens[i].splice(i,1);
  }

}
