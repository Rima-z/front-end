import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriService } from '../services/inscri.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Inscri } from '../models/inscri.model';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit{
   // private baseURL = "http://localhost:8089/pharmacien/data";
   submited = false;
   isSuccessful=false;
   detailUser: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    matricule: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    role:new FormControl(''),
    tel:new FormControl(''),
    portable:new FormControl(''),
    idc:new FormControl(''),
    idb:new FormControl(''),
    adresse:new FormControl(''),

   
   
  });
   pharmacien: Inscri = new Inscri();

   constructor(private router: Router, private InscriService: InscriService, private httpClient: HttpClient, private formBuilder: FormBuilder,) { }
     redirectToInscription() {
     this.router.navigate(['/login'], { replaceUrl: true });
   }
 
   ngOnInit(): void {
    this.detailUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(4)]],
      matricule: ['', [Validators.required, Validators.minLength(5)]],
      role:['', [Validators.required]],
      tel:['', [Validators.required]],
      portable:['', [Validators.required]],
      idc:['', [Validators.required]],
      idb:['', [Validators.required]],
      adresse:['', [Validators.required]],
    });
     
   }
   get f(): { [key: string]: AbstractControl } {
    return this.detailUser.controls;
  }
   createPharmacien(){
     this.InscriService.createPharmacien(this.pharmacien).subscribe( data =>{
     console.log(this.pharmacien)
       this.goToDashboard();
       // this.addToList();
     },
     error => console.log(error));
   }
 
   goToDashboard(){
     this.router.navigate(['/dashboard']);
   }
   signup(){
    this.submited=true
    this.pharmacien.nom=this.detailUser.value.nom
    this.pharmacien.prenom=this.detailUser.value.prenom
    this.pharmacien.matricule=this.detailUser.value.matricule
    this.pharmacien.password=this.detailUser.value.password
    this.pharmacien.email=this.detailUser.value.email
    this.pharmacien.role=this.detailUser.value.role
    this.pharmacien.tel=this.detailUser.value.tel
    this.pharmacien.portable=this.detailUser.value.portable
    this.pharmacien.idc=this.detailUser.value.idc
    this.pharmacien.idb=this.detailUser.value.idb
    this.pharmacien.adresse=this.detailUser.value.adresse

   
    if (this.detailUser.invalid) {
      return;
    }
    

    this.InscriService.createPharmacien(this.pharmacien).subscribe(res=>{
        this.isSuccessful=true
  
          this.router.navigate(['/login']);
        
    },err=>{

     console.log("erreur")
    })
  }
   // addToList(): Observable<Inscri[]>{
   //   return this.httpClient.get<Inscri[]>(`${this.baseURL}`);
   // }
 
   onSubmit(){
     console.log(this.pharmacien);
     this.createPharmacien();
     this.goToDashboard();
     // this.addToList();
   }
 
   // Afficher(){
   //   console.log(this.pharmacien)
   // }

   
 
 }

