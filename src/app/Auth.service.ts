import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
interface AuthResponseData {
    idToken: string;
    email: string;
    refershToken: string;
    expiresIn: string;
    localId: string
}

@Injectable({providedIn: 'root'})

export class AuthService {
    isLoggedIn = false;

    constructor(private http: HttpClient){
    }

    signUp(email: string, password: string){
       return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        AIzaSyCY5XECYpwPiZfSFb68JXjTgusqqCFWNGE`,{
            email, password, returnSecureToken: true
        })
    }

    login(){
        
    }
    logout(){

    }
    isAuthenticated(){
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(this.isLoggedIn)
            },1000)
        })
    }
}