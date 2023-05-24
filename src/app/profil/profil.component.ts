import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/profileGestion/token-storage-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  detailMedecin:FormGroup=new FormGroup({
    email:new FormControl(this.tokenStorage.getUser().email),
    matricule:new FormControl(this.tokenStorage.getUser().matricule),
    nom:new FormControl(this.tokenStorage.getUser().nom),
    prenom:new FormControl(this.tokenStorage.getUser().prenom),
    tel:new FormControl(this.tokenStorage.getUser().tel),
    portable:new FormControl(this.tokenStorage.getUser().portable),
    adresse:new FormControl(this.tokenStorage.getUser().adresse),
    idb:new FormControl(this.tokenStorage.getUser().idb),
    idc:new FormControl(this.tokenStorage.getUser().idc),
    
  })
  email!:string
  matricule!:string
  nom!:string
  prenom!:string
  role!:string
  tel!:number
  portable!:number
  adresse!:string
  idb!:number
  idc!:string

  constructor(private router: Router,private tokenStorage:TokenStorageService,private formBuilder:FormBuilder) {
    console.log(this.tokenStorage.getUser())
    this.email=this.tokenStorage.getUser().email
    this.matricule=this.tokenStorage.getUser().matricule
    this.nom=this.tokenStorage.getUser().nom
    this.prenom=this.tokenStorage.getUser().prenom
    this.role=this.tokenStorage.getUser().role
    this.tel=this.tokenStorage.getUser().tel
    this.portable=this.tokenStorage.getUser().portable
    this.adresse=this.tokenStorage.getUser().adresse
    this.idb=this.tokenStorage.getUser().idb
    this.idc=this.tokenStorage.getUser().idc
   }




  redirectToProfil() {
    this.router.navigate(['/profil'], { replaceUrl: true });
  }
  redirectToDashboard() {
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }
  redirectToTraitement() {
    this.router.navigate(['/traitement'], { replaceUrl: true });
  }
  redirectToLogin() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  redirectToHistoriquec() {
    this.router.navigate(['/historiquec'], { replaceUrl: true });
  }
  redirectToHistoriqued() {
    this.router.navigate(['/historiqued'], { replaceUrl: true });
  }
  redirectToSugrec() {
    this.router.navigate(['/sugrec'], { replaceUrl: true });
  }
  
}




