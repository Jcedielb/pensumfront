import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from './subject';
import { SubjectDetail } from './subject-detail';

@Injectable({
 providedIn: 'root'
})
export class SubjectService {

 private apiUrl: string = environment.baseUrl + 'subjects';

 constructor(private http: HttpClient) { }

 getSubjects(): Observable<SubjectDetail[]> {
   return this.http.get<SubjectDetail[]>(this.apiUrl);
 }
 createSubject(subject: SubjectDetail): Observable<SubjectDetail> {
  return this.http.post<SubjectDetail>(this.apiUrl, subject);
}
}