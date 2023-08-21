import { Component } from '@angular/core';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;

  title = 'Restaurent';


  constructor(
    private route:ActivatedRoute
  ){}
  email:any;
  ngOnInit(): void{
  
    this.route.queryParams.subscribe((params:any)=>{
  this.email=params.data
  
    })
  
  }
}
