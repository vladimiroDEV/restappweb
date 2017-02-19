
import{Injectable} from '@angular/core';
import {Observable}  from 'rxjs/Observable'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import {Menu} from './classes/Menu';

@Injectable()
export class ManageMenuService {

  
    // getMenu()  {
    //  var  menu = [{"MenuName": "Menu_1"},
    //  {"MenuName": "Menu_2"},
    //  {"MenuName": "Menu_3 nome lunghissimo "}
    //  ]  ;
     
    //      return menu;
    // }

    //  private _url="http://localhost:20422/api/Menu";
    private _url="/menu.json";
    constructor(private _http: Http){
    }

    getMenuList() : Observable<Menu[]>{
             return this._http.get(this._url)
            .map(res =>res.json() as Menu[]);

          
    }

    createMenu(menu:Menu) {
       return   this._http.post(this._url, JSON.stringify(menu))
        .map(res=>res.json);
    }
  
}