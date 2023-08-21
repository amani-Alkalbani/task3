import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn} from '@angular/forms';
import { CommonService } from '../common.service';
import { faTwitter,  faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import { AlertService } from '../_alert';
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faTwitter=faTwitter;
  faFacebook= faFacebook;

 
  faInstagramSquare=faInstagramSquare;
  alert:boolean = false;
  createUser= new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',  Validators.compose([Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')])),
    email: new FormControl('',[Validators.required, Validators.email]),
   role:new FormControl('User')
    
  })

  get name(){
    return this.createUser.get('name')
  }
    
  get email(){
    return this.createUser.get('email')
  }
  get password(){
    return this.createUser.get('password')
  }

  constructor(private resto:CommonService) { }
  
  ngOnInit(): void {
  }
  regUser(){
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result)=>{


      console.log(result,"data created sucessfull")

   Swal.fire({
  position: 'top',
  icon: 'success',
  title: 'Congratulations, your account has been successfully created',
  showConfirmButton: false,
  timer: 2000
})

this.createUser.reset();
    })
  }
}
