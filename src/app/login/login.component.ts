import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup ,Validators, ValidationErrors, ValidatorFn} from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { NotificationService } from '../notification.service';
import { faTwitter,  faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import { AlertService } from '../_alert';
import { ToastrService } from 'ngx-toastr'
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  faTwitter=faTwitter;
  faFacebook= faFacebook;
  faInstagramSquare=faInstagramSquare;
  login:FormGroup|any;
  public user:any= [];

  alert:boolean = false;
  email:any='';
  password:any='';
  result: any;
  ngOnInit(): void {
    this.login = new FormGroup({
      email:new FormControl('', Validators.required),
 
      password: new FormControl('',Validators.required)
    })
  }

  constructor(private service:CommonService,private toastr: ToastrService ,private router:Router,private _http:HttpClient,private notifyService : NotificationService,public alertService: AlertService) {

    sessionStorage.clear();
   }


    // logIn(){
    // if(this.email == "admin@gmail.com" && this.password =="Admin@123"){
    //   this.router.navigate(["./list"]);
    // }
    // else{
    //   alert("Please Enter Valid Details");
    // }

    // this.resto.loginUser(this.email ,this.password).subscribe((result)=>{

    

    //   this.user= result;



    //   console.log(this.user)
    // });


    // }

   
    logindata(login:FormGroup){
      // console.log(this.login.value);
       this._http.get<any>("http://localhost:3000/users")
       .subscribe(res=>{
         const user = res.find((a:any)=>{

          sessionStorage.setItem('username',a.email);
          sessionStorage.setItem('name',a.name);
          sessionStorage.setItem('Admin',a.role);
           return a.email === this.login.value.email && a.password === this.login.value.password 
         });

         if(user && sessionStorage.getItem('Admin')=='Admin'){
       
        this.login.reset();
 
        this.router.navigate(['list'],{queryParams:{data:this.email}});

       }
       else if(user){
        this.router.navigate(['']);
       }

      
             
         else{
          this.alertService.error('No user found for this Email/Password ');
           this.router.navigate(['login']);
         }
   
       }, err=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
       })
      
   
     }



     proceedlogin() {
      if (this.login.valid) {

        this.service.login(this.email, this.password).subscribe(
          (response) => {
            if (response.length > 0) {
              console.log(response);
              sessionStorage.setItem('user', JSON.stringify(response[0]));
              console.log('Login successful');
              // Redirect to dashboard or desired route
            } else {
              console.error('Invalid credentials');
            }
          },
          (error) => {
            console.error('Error during login:', error);
          }
        );
      }

        

        // this.service.login(this.login.value.email,this.login.value.password).subscribe((item:any) =>{
        //   this.result = item;
        //  console.log(this.result );
          
        // });
//         this.service.GetUserbyCode(this.login.value.email).subscribe((item:any) => {
//           this.result = item;
//           this.result = item;
//           if (this.result.password === this.login.value.password ) {
            
//               sessionStorage.setItem('username',this.result.id);
//               sessionStorage.setItem('role',this.result.role);
// console.log(  sessionStorage.getItem('role'));
//               if( sessionStorage.getItem('role')=="Admin"){
//                 this.router.navigate(['/list']);
//               }else{
//                 this.router.navigate(['']);
//               }
             
          
//           } else {
//             this.alertService.error('No user found for this Email/Password ');
//           }
//         });
    //   } else {
    //     this.alertService.error('No user found for this Email/Password ');
    //   }
    // }

        }
      }
