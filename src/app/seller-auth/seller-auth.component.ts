import { Component, ɵLocaleDataIndex } from '@angular/core';
import { SellerService } from '../services/seller.service';
import{Router} from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
 constructor(private seller:SellerService, private router:Router){}
  showLogin=false;  
  authError:string='';
 //constructor(private seller:SellerService){}
 ngOnInit():void{
   this.seller.reloadSeller()
 }

 signUp(data:SignUp):void{
 
  this.seller.userSignUp(data)

 }
 Login(data:SignUp):void{
  console.warn(data)
  this.seller.userLogin(data)
  this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError="Email or Password is not correct"
    }
  })
 }

 openLogin(){
  this.showLogin=true;
 }
 openSignUp(){
  this.showLogin=false;
 }
}
