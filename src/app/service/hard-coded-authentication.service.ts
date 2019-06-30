import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }
  authenticate(username, password){
    if(username==='anchal' && password==='anchal'){
      return true;
    }
    return false; 
  }
}
