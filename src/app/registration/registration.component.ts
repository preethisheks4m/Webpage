import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  details=["Yes","No"]

  countries=[
    "India",
    "Africa",
    "America",
    "Russia",
    "France",
    "USA",
    "UAE",
    "South Korea"
  ]
  

  constructor(private router:Router,private fb:FormBuilder) { }

 regForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    firstName:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]],
    email:['',[Validators.required,Validators.email]],
    mobNumber:['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    client:['',[Validators.required]],
    country:['',[Validators.required]],
    date: ['',[Validators.required]],
    competitor:['',[Validators.required]],
    check:['',[Validators.required]],


})

  ngOnInit(): void {
  }
  get name() {
    return this.regForm.get('name');
  }
  get firstName() {
    return this.regForm.get('firstName');
  }
  get lastName() {
    return this.regForm.get('lastName');
  }
  get email(){
    return this.regForm.get('email');

  }
  get mobNumber(){
    return this.regForm.get('mobNumber');

  }
  get competitor(){
    return this.regForm.get('competitor');

  }
  get check(){
    return this.regForm.get('check');
  }
  get date(){
    return this.regForm.get('date');
  }
  get country(){
    return this.regForm.get('country');
  }
  get client(){
    return this.regForm.get('client');
  }


  click(){
    this.router.navigate(['/success']);
  }

}
