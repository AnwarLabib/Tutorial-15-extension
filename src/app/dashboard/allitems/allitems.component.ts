import { Component } from '@angular/core';
import { AllItemsService } from './allitems.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { Item } from '../items/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-allitems',
  templateUrl: './allitems.component.html'
})
export class AllItemsComponent {

  filteredStatus = '';
  items : Observable<Item[]>;
  addMode = false;
  name;
  price;
  added = false;
  user:any = false;
  constructor(private itemService: AllItemsService,private userService:UserService,private router:Router){}
  

  ngOnInit(){
    if(this.userService.user)
    {
      this.itemService.getItems();
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
    else{
      this.router.navigate(['..']);
    }

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
