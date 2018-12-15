import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data ;
    constructor() { }

    getData() {
        return this.data;
    }

    getUser(userId: string){
        for(let u of this.data){
          if(u.id.value === userId) {
            return u;
          }
        }
        return {};
      }

      isValidId(userId: string): boolean{
        for(let u of this.data){
          if(u.id.value == userId) {
            return true;
          }
        }

        return false;
      }
}
