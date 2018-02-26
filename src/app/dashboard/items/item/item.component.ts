import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item:Item;

  editMode = false;
  name;
  price;
  sellerName;
  created;
  updated;

  constructor(private itemService: ItemsService){}


  filteredStatus = '';

  ngOnInit() {
    this.name = this.item.name;
    this.price = this.item.price;
    this.sellerName = this.item.sellerName;
    // this.created = ""+this.item.created.getDate()+"/"+this.item.created.getMonth()+"/"+this.item.created.getFullYear();
    // this.updated = ""+this.item.updated.getDate()+"/"+this.item.updated.getMonth()+"/"+this.item.updated.getFullYear();
  }

  onDelete(){
    this.itemService.deleteItem(this.item);
  }

  onEdit(){
    this.editMode=true;
  }

  onCancel(){
    this.editMode=false;
    this.name = this.item.name;
    this.price = this.item.price;
    this.sellerName = this.item.sellerName
  }

  onEditItem(){
    // var newCreatedArray=this.created.split("/",4);
    // var day = newCreatedArray[0];
    // var month = newCreatedArray[1];
    // var year = newCreatedArray[2];
    // var newCreatedDate = new Date(year,month,day);

    // var newupdatedArray=this.updated.split("/",4);
    // var day = newupdatedArray[0];
    // var month = newupdatedArray[1];
    // var year = newupdatedArray[2];
    // var newupdatedDate = new Date(year,month,day);

    this.itemService.editItem(this.item._id,new Item(this.item._id,this.name,this.price,this.item.createdAt,new Date(),this.sellerName));
    this.editMode=false;
  }


}
