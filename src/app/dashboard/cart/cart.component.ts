import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { Item } from '../items/item.model';
import { AllItemsService } from '../allitems/allitems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  filteredStatus = '';
  items : Observable<Item[]>;
  addMode = false;
  empty = true;
  checkedOut = false;
  total = 0;
  name;
  price;
  added = false;
  user:any = false;

  constructor(private itemService: AllItemsService,private userService:UserService, private router:Router){}


  ngOnInit(){
    if(this.userService.user!=null)
    {
      this.itemService.getCart();
      if(this.userService.user!=null){
        this.user = true;

      }

      this.items = Observable.of(this.itemService.cartItems);
      this.itemService.cartSubject.subscribe(
        (items: Item[]) =>{
          this.items = Observable.of(items);
          this.empty = (items.length > 0) ? false : true;
        }
      );
    }
    else{
      this.router.navigate['..'];
    }
  }

  checkout() {
    var total = 0;
    var i = 1;
    this.items.forEach((element) => {
      element.forEach((item) => {
        total += item.price;
        this.itemService.removeFromCart(item);
        console.log(i++);
      })
    });
    this.total = total;
    this.checkedOut = true;
  }

}
