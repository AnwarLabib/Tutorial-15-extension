import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AllItemsService } from '../allitems.service';
import { Item } from '../../items/item.model';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-allitem',
  templateUrl: './allitem.component.html',
  styleUrls: ['./allitem.component.scss']
})
export class AllItemComponent implements OnInit {

  @Input() item:Item;

  name;
  price;
  sellerName;
  created;
  updated;
  addMode;
  user:boolean;
  constructor(private itemService: AllItemsService,private userService:UserService){}


  filteredStatus = '';

  ngOnInit() {
    if(this.userService.user){
      this.user = true;
    }
    this.name = this.item.name;
    this.price = this.item.price;
    this.sellerName = this.item.sellerName;
    var found:boolean = false;
    this.item.addedInCarts.forEach((cartArray)=>{
      if(cartArray._id){
        if(cartArray._id.includes(this.userService.user._id))
        this.addMode = true;
      }
    });
    // this.created = ""+this.item.created.getDate()+"/"+this.item.created.getMonth()+"/"+this.item.created.getFullYear();
    // this.updated = ""+this.item.updated.getDate()+"/"+this.item.updated.getMonth()+"/"+this.item.updated.getFullYear();
  }

  addToCart(){
    this.itemService.addToCart(this.item);
    this.addMode = true;
  }

  removeFromCart(){
    console.log("test");
    this.itemService.removeFromCart(this.item);
    this.addMode = false;
  }

}
