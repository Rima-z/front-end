import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { consultation } from '../models/consultation.model';




@Injectable({
    providedIn: 'root',
  })
export class consultationService{

    private addUrl = 'http://localhost:8089/Stage/Consultation/add';
    private listUrl = 'http://localhost:8089/Stage/Consultation/liste';

    constructor(private http: HttpClient){
    }
    
    addConsultation(consultation: consultation): Observable<consultation>{
        return this.http.post<consultation>(this.addUrl, consultation);
    }
    submitForm(formData: FormData): Observable<any> {
      const url = 'http://localhost:8089/Stage/Consultation/add';
      return this.http.post(url, formData);
    }
    getConsultationData(): Observable<any[]> {
      const url = 'http://localhost:8089/Stage/Consultation/liste'; // Replace with the actual endpoint to fetch sug_rec data
      return this.http.get<any[]>(url);
    }
}