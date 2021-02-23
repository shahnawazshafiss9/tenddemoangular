import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http: HttpClient) { }
  onSubmitAlert() {
    alert('Alert, contact you soon shortly');
  }
  product(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/1/posts');
  }
//  userName = new Subject<any>();
userName = new BehaviorSubject('Magos tech');

}
