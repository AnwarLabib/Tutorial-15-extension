import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { Item } from '../items/item.model';
import { AllItemsService } from '../allitems/allitems.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  filteredStatus = '';
  items : Observable<Item[]>;
  addMode = false;
  name;
  price;
  added = false;
  user:any = false;
  
  constructor(private itemService: AllItemsService,private userService:UserService){}
  

  ngOnInit(){
    this.itemService.getCart();
    if(this.userService.user!=null){
      this.user = true;

    }

    this.items = Observable.of(this.itemService.cartItems);
    this.itemService.cartSubject.subscribe(
      (items: Item[]) =>{
        this.items = Observable.of(items);
      }
    );
  }
}
