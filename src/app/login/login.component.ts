import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="anchal"
  password=""
  errorMsg="Invalid Credential"
  invalidLogin= false
  constructor() { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.username==='anchal' && this.password==='anchal'){
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true
    }
  }

}
