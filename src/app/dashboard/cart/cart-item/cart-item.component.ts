import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../items/item.model';
import { AllItemsService } from '../../allitems/allitems.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item:Item;

  name;
  price;
  sellerName;
  created;
  updated;
  constructor(private itemService: AllItemsService){}


  filteredStatus = '';

  ngOnInit() {
    this.name = this.item.name;
    this.price = this.item.price;
    this.sellerName = this.item.sellerName;
    // this.created = ""+this.item.created.getDate()+"/"+this.item.created.getMonth()+"/"+this.item.created.getFullYear();
    // this.updated = ""+this.item.updated.getDate()+"/"+this.item.updated.getMonth()+"/"+this.item.updated.getFullYear();
  }


  removeFromCart(){
    this.itemService.removeFromCart(this.item);
  }

}
