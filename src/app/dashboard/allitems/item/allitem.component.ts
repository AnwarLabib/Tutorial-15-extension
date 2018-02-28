import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AllItemsService } from '../allitems.service';
import { Item } from '../../items/item.model';

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
  addMode=true
  constructor(private itemService: AllItemsService){}


  filteredStatus = '';

  ngOnInit() {
    this.name = this.item.name;
    this.price = this.item.price;
    this.sellerName = this.item.sellerName;
    // this.created = ""+this.item.created.getDate()+"/"+this.item.created.getMonth()+"/"+this.item.created.getFullYear();
    // this.updated = ""+this.item.updated.getDate()+"/"+this.item.updated.getMonth()+"/"+this.item.updated.getFullYear();
  }

  addToCart(){
    this.addMode = false;
  }

  removeFromCart(){
    this.addMode = true;
  }

}
