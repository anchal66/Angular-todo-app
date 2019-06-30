import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

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
  constructor(private router:Router, 
    private hardCodedAuthenticationService:HardCodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.hardCodedAuthenticationService.authenticate(this.username, this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true
    }
  }

}
