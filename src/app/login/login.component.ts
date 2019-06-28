import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  //Depency Injection for Router
  constructor(private router:Router) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.username==='anchal' && this.password==='anchal'){
      //redirect to welcome page
      this.router.navigate(['welcome'])
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true
    }
  }

}
