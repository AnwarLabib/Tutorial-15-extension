import { Subject } from "rxjs/Subject";
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Headers } from "@angular/http";
import { UserService } from "../../user.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Item } from "../items/item.model";


@Injectable()
export class AllItemsService implements OnInit{

    constructor(private http:Http,private userService:UserService){
    }

    ngOnInit(){
        this.getCart();
        // this.getItems();
    }

    itemSubject = new Subject();

    cartSubject = new Subject();

    cartItems:Item[];

    items: Item[];


    findIndexById(item:Item){
        for(var i = 0; i<this.items.length;i++){
            if(item._id==this.items[i]._id){
              return i;
            }
        }
    }

    deleteItem(item:Item){
        // var index = this.findIndexById(item);
        // this.items.splice(index,1);
        // this.itemSubject.next(this.items.slice());
        const headers = new Headers({'x-auth':this.userService.user.token});
        this.http.delete(`http://localhost:3000/api/product/deleteProduct/${item._id}`,{headers:headers})
        .subscribe((res: Response)=>{
            this.getItems();
        });

    }

    editItem(id:number,updatedItem:Item){
        var index = this.findIndexById(updatedItem);

        // this.items[index] = updatedItem;
        // this.itemSubject.next(this.items.slice());
        const headers = new Headers({'x-auth':this.userService.user.token});

        this.http.patch(`http://localhost:3000/api/product/updateProduct/${updatedItem._id}`,updatedItem,{headers:headers})
        .subscribe((res: Response)=>{
            this.getItems();
        });
    }

    addProduct(name:string,price:number){
        var item = new Item(null,name,price,new Date(),new Date(),this.userService.user.username);
        const headers = new Headers({'x-auth':this.userService.user.token});

        // this.items.push(item);
        // this.itemSubject.next(this.items.slice());

        this.http.post('http://localhost:3000/api/product/createProduct',item,{headers:headers})
        .subscribe((res: Response)=>{
            this.getItems();
        },(err)=>{
            console.log(err);
        });

    }

    getItems(){
            this.http.get('http://localhost:3000/api/product/getAllProducts')
            .subscribe((res:Response)=>{
                this.items = res.json().data;
                this.itemSubject.next(this.items.slice());
            },(err:any)=>{
                console.log(err);
            });
    }

    addToCart(item:Item){
        const headers = new Headers({'x-auth':this.userService.user.token});
       this.http.patch(`http://localhost:3000/api/product/addToCart/${item._id}`,{},{headers:headers})
        .subscribe((res:Response)=>{
            this.getCart();
            this.itemSubject.next(this.items.slice());
        },(err:any)=>{
            console.log(err);

        });
    }

    removeFromCart(item:Item){

        var _id = item._id;

        this.http.delete(`http://localhost:3000/api/product/removeFromCart/${_id}`,{
            headers:new Headers({
                'x-auth':this.userService.user.token
            })
        })
        .subscribe((res:Response)=>{
            this.getCart();
            this.itemSubject.next(this.items.slice());
        },(err:any)=>{
            console.log(err);

        });
    }

    getCart(){
        this.http.get(`http://localhost:3000/api/product/getCart`,{
            headers:new Headers({
                'x-auth':this.userService.user.token
            })
        })
        .subscribe((res:Response)=>{
            this.cartItems = res.json().data;
            this.cartSubject.next(this.cartItems.slice());
        },(err:any)=>{
            console.log(err);
        });
    }
    clearCart() {
      this.http.delete(`http://localhost:3000/api/product/clearCart`,{
          headers:new Headers({
              'x-auth':this.userService.user.token
          })
      })
      .subscribe((res:Response)=>{
          this.getCart();
      },(err:any)=>{
          console.log(err);

      });
    }

}
