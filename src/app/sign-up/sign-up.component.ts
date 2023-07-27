import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Store } from '@ngrx/store';
import { User } from '../State/user.model';
import { getValueSuccess, signUpSuccess } from '../State/signup.actions';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  SignUpForm = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
   })
  
   constructor(private api : ApiService , private store : Store,){}
  
   SignUpformsubmit(){
    // if(this.SignUpForm.valid){
    //   this.api.postSignUpData(this.SignUpForm.value)
    //   .subscribe({
    //     next:(res)=>{
    //       alert("Details Add Successfully")
    //       // this.SignUpForm.reset();
    //     },
    //   })
    // }
 
    const user: User = this.SignUpForm.value as User;
    this.store.dispatch(signUpSuccess({ user }));
    console.log(this.SignUpForm.value);
   
    // this.SignUpForm.reset();
    
   }
  
    // Validation
   get username(){
    return this.SignUpForm.get('username');
  }
   get email(){
    return this.SignUpForm.get('email');
  }
   get password(){
    return this.SignUpForm.get('password');
   }
   get confirmPassword(){
    return this.SignUpForm.get('confirmPassword');
   }
   get phone(){
    return this.SignUpForm.get('phone');
   } 
   
  
   ngOnInit(){
      //  this.api.getValue().subscribe((res)=>{
      //   console.log(res);
      //  })
   }
}
