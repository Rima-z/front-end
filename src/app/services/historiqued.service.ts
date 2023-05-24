import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { historiqued } from "../models/historiqued.model";

@Injectable({
    providedIn: 'root',
  })

export class historiquedService {

    private addUrl = 'http://localhost:8089/Stage/Historiqued/addh';
    private listUrl = 'http://localhost:8089/Stage/Historiqued/listeh';
    private deleteUrl = 'http://localhost:8089/Stage/Historiqued/deletet';

    constructor(private http: HttpClient){
    }

    addHistoriqued(historiqued: historiqued): Observable<historiqued>{
        return this.http.post<historiqued>(this.addUrl, historiqued);
    }
    submitForm(formData: FormData): Observable<any> {
      const url = 'http://localhost:8089/Stage/Historiqued/addh';
      return this.http.post(url, formData);
    }
    getHistoriquedData(): Observable<any[]> {
      const url = 'http://localhost:8089/Stage/Historiqued/listeh'; // Replace with the actual endpoint to fetch sug_rec data
      return this.http.get<any[]>(url);
    }

}