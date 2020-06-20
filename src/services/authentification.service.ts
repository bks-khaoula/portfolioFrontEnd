
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class AuthentificationService{

    private users=[
        {usernam:'admin',password:'1234'},
        {usernam:'rida',password:'1234'}
    ]

    public isAuthenticated:boolean;
    public userAuthenticated;

    constructor(){
    }

    public login(username:string,password:string){
        let user;
        this.users.forEach(u=>{
            if(u.usernam==username && u.password==password){
                user=u;
            }
        });
        if(user){
            this.isAuthenticated=true;
            this.userAuthenticated=user;
        }else{
            this.isAuthenticated=false;
            this.userAuthenticated=undefined;
        }
    }


}