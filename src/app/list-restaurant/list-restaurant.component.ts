import { Component } from '@angular/core';
import { CommonService } from '../common.service'; 
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Restaurant } from '../restaurant';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent {

  searchText:string='';
  faPen=faPen;
  faTrash=faTrash;
  faSearchengin=faSearchengin;
  alert:boolean= false;
public collection:any= [];
public allres: any = [];

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result)=>{
      this.collection= result;
  
      this.allres =this.collection;
      console.log(this.collection);

      

      // this.allres = (arr:any, searchInput:any) => {
      //   const filteredData = this.collection.filter((value:any)=> {
      //     const searchStr = searchInput.toLowerCase();
      //     const nameMatches = value.name.toLowerCase().includes(searchStr);
      //     // const daysMatches = value.days.toString().includes(searchStr);
      //     // const oneItemMatches = value.items.some(item => item.toLowerCase().includes(searchStr));
    
      //     return nameMatches;
      //   });
      //   console.log(filteredData);
      //   //this.setState({ list: filteredData });
      // }





    //   const result1 = this.collection.filter((obj:any) => {
    //     return obj.name === this.searchText;
    //   });
      
    //   console.log(result1);


      
    //   const result2 = this.collection.filter((obj:any) => {
    //     return (
    //       (obj.name === 'Amani alkalbani') ||
    //       obj.Adress === 'Muscat'
    //     );
    //   });

    //   console.log(result2);
    // this.collection=result2;
    });

 


  }
  Search(){



    if(this.searchText!== ""){
      let searchValue = this.searchText.toLocaleLowerCase();
  
          this.allres = this.collection.filter((res:any) =>{
            return res.name.toLocaleLowerCase().includes(searchValue ) 
   
   // you can keep on adding object properties here   
      
          });
      
        }else {  // if(this.searchText== ""){ you don't need this if
          this.ngOnInit();
        } 
        //this.setState({ list: filteredData });
      }


  





  

  deleteResto(resto:any){

    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.collection.splice(resto.id,-1)
        this.commonService.deleteResto(resto).subscribe((result)=>{
          console.log("Data is Deleted Successfull !", result)
          // this.alert= true;
        })
        Swal.fire(
          'Deleted!',
          'Your  file has been deleted.',
          'success'
        )
        this.ngOnInit();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your  file is safe :)',
          'error'
        )
      }
      this.ngOnInit();
    })



    // this.collection.splice(resto.id,-1)
    // this.commonService.deleteResto(resto).subscribe((result)=>{
    //   console.log("Data is Deleted Successfull !", result)
    //   this.alert= true;
    //   this.ngOnInit();
    // })
  }
  closeAlert(){
    this.alert= false;
  }



}
