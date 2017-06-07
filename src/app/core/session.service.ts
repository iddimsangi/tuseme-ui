import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  currentUser:any = {};

  constructor() { }

  setCurrentUser(data:any){
    this.currentUser = data;
  }

  getCurrentUser():any{
    return this.currentUser;
  }

}
