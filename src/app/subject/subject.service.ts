import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from './subject';

@Injectable({
 providedIn: 'root'
})
export class SubjectService {

 private apiUrl: string = environment.baseUrl + 'subjects';

 constructor(private http: HttpClient) { }

 getSubjects(): Observable<Subject[]> {
   return this.http.get<Subject[]>(this.apiUrl);
 }

}