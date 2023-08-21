import { Component,OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  arr: any = {};
  alert:boolean = false;
  editRestaurent= new FormGroup({
    name: new FormControl(''),
    Adress: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService, private router:ActivatedRoute,private routerr:Router) { }
  
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)


   


    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
     
          this.arr = result;
          this.editRestaurent.patchValue({
            name: this.arr.name,
            Adress: this.arr.Adress,
            email:this.arr.email

          });

      // this.editRestaurent= new FormGroup({
      
      //  name : new FormControl(result['name']),
      //   Adress: new FormControl(result['Adress']),
      //   email: new FormControl(result['email'])
      // })
    })
  }
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id,this.editRestaurent.value).subscribe((result)=>{

      Swal.fire({
        icon: 'success',
      
        text: 'Your change have been successfully saved!',
        confirmButtonText: 'OK',

      }).then((result) => {
        
        if (result.isConfirmed) {
          this.routerr.navigate(['/list']);
        }
      })
      console.log(result,"data updated successfull")
      this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;
  }

}
