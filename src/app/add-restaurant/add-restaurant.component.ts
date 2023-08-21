import { Component } from '@angular/core';
import {CommonService } from '../common.service';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  alert:boolean = false;
  addRestaurent= new FormGroup({
    name: new FormControl('',Validators.required),
    Adress: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)

   })
   constructor(private resto:CommonService) { }
   get name(){
    return this.addRestaurent.get('name')
  }
  get Adress(){
    return this.addRestaurent.get('Adress')
  }
    
  get email(){
    return this.addRestaurent.get('email')
  }
   ngOnInit(): void {
  }
  craeteResto(){
    // console.log(this.addRestaurent.value);
    this.resto.addResto(this.addRestaurent.value).subscribe((result)=>{
      this.alert = true;
      this.addRestaurent.reset({});
      console.log("Get Data From Service", result)
    })
  }
  closeAlert(){
    this.alert = false;
  }


}
