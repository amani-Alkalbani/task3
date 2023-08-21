import { Component } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CommonService } from '../common.service';
import { FormControl, FormGroup ,Validators, ValidationErrors, ValidatorFn,FormBuilder } from '@angular/forms';
import { faFloppyDisk} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {

  name='Food';
  imgurl='assets/hero-img.png';
  text1='';

}