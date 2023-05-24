import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscri } from '../models/inscri.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const SIGN_UP_URL ="http://localhost:8089/Stage/Medecin/register-medecin"
@Injectable({
  providedIn: 'root'
})
export class InscriService {
  private baseUrl = 'http://localhost:8089/Stage/Medecin/register-medecin';

  constructor(private http: HttpClient, private router: Router) { }
 
  createPharmacien(pharmacien: Inscri): Observable<any> {
    console.log(pharmacien);
    return this.http.post(
      SIGN_UP_URL,
      {
        nom: pharmacien.nom,
        prenom: pharmacien.prenom,
        matricule: pharmacien.matricule,
        password: pharmacien.password,
        email: pharmacien.email,
        role: pharmacien.role,
        tel: pharmacien.tel,
        portable: pharmacien.portable,
        idb: pharmacien.idb,
        idc: pharmacien.idc,
        adresse: pharmacien.adresse,
      },
      { observe: 'response' }
    );
  }
	
}
