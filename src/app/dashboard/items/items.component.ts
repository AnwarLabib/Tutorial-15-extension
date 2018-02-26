import { Component } from '@angular/core';
import { Item } from "./item.model";
import { ItemsService } from './items.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {

  filteredStatus = '';
  items : Observable<Item[]>;
  addMode = false;
  name;
  price;
  added = false;
  user:any = false;
  constructor(private itemService: ItemsService,private userService:UserService){}
  

  ngOnInit(){
    //this.itemService.getItems();
    if(this.userService.user!=null){
      this.user = true;

    }

      this.items = Observable.of(this.itemService.items);
    this.itemService.itemSubject.subscribe(
      (items: Item[]) =>{
        this.items = Observable.of(items);
      }
    );
  }

  onAdd(){
    this.addMode = true;
  }

  onCancel(){
    this.addMode = false;
    this.name='';
    this.price = '';
  }

  addItem(){
    this.itemService.addProduct(this.name,this.price);
    this.addMode = false;
    this.added=true;
    this.name='';
    this.price = '';
  }

  toggleAlertOff(){
    this.added=false;
  }
}
