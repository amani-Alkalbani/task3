import { Component } from '@angular/core';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent {
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;

  email:any;
  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit(): void{
  
this.email=sessionStorage.getItem('name');
  
    }
  
  }

