import { Subject } from "rxjs/Subject";
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { User } from "./user.model";
import { Headers } from "@angular/http";
import { ItemsService } from "./dashboard/items/items.service";

@Injectable()
export class UserService{
    
    constructor(private http:Http){        
    
    }
    
    public user:User=null;
    public userSubject = new Subject();


    register(username:string,password:string){
        var user = new User(username,password);

        return this.http.post('http://localhost:3000/api/user/createUser',user);
    }

    logout(token:String){
        const headers = new Headers({'x-auth':token});
        return this.http.delete('http://localhost:3000/api/user/deleteUser',{headers:headers})
        .subscribe(()=>{
            this.user = null;
            this.userSubject.next(this.user);
            // this.itemsService.items = [];
            // this.itemsService.itemSubject.next(this.itemsService.items);
        });
    }

    logIn(username:string,password:string){
        var user = new User(username,password);
        return this.http.post('http://localhost:3000/api/user/loginUser',user);
    }

}