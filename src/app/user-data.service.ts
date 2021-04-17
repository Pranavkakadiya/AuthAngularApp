import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getdata(){
    return {
      name:'anil',
      age:30,
      id:10
    }
  }
}
