import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/profileGestion/token-storage-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { modifierService } from '../services/modifier.service';
import { modifier } from '../models/modifier.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  listData: any[]=[]
  Modifier: modifier = new modifier();
  myForm: FormGroup;

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

  constructor(private router: Router,private tokenStorage:TokenStorageService,private formBuilder:FormBuilder, private modifierService: modifierService,) {

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


    //modifier
    this.myForm = this.formBuilder.group({
      nomprenomm: [''],
      emailm: [''],
      adressem: [''],
      telm: [''],
      portablem: [''],
      idcm: [''],
      matriculem: [''],
      idbm: ['']
    });
    this.modifierService = modifierService;
    this.listData = [];
    this.modifierService.getModifierData().subscribe(data => {
      this.listData = data;
      console.log(this.listData)
       });
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

  ngOnInit(): void {
 
  }

  //modifier
  onSubmit(){
    if (this.myForm.valid) {
      const formData = new FormData();
      formData.append('nomprenomm', this.myForm.get('nomprenomm')?.value || '');
      formData.append('matriculem', this.myForm.get('matriculem')?.value || '');
      formData.append('emailm', this.myForm.get('emailm')?.value || '');
      formData.append('telm', this.myForm.get('telm')?.value || '');
      formData.append('portablem', this.myForm.get('portablem')?.value || '');
      formData.append('adressem', this.myForm.get('adressem')?.value || '');
      formData.append('idbm', this.myForm.get('idbm')?.value || '');
      formData.append('idcm', this.myForm.get('idcm')?.value || '');
      this.modifierService.submitForm(formData).subscribe(
        (response) => {
          // Handle success response
          console.log('Form submitted successfully:', response);
          // Reset the form
          this.myForm.reset();
          close();
          this.listData.push(this.myForm.value);
        },
        (error) => {
          // Handle error response
          console.error('Error submitting form:', error);
          this.myForm.reset();
          close();
          this.listData.push(this.myForm.value);
        }
      );
    } else {
      // Form validation failed
      console.log('Invalid form');
      this.myForm.reset();
      close();
      this.listData.push(this.myForm.value);
    }
    console.log(this.Modifier);
    this.createModifier();
    this.myForm.reset();
    close();
    this.listData.push(this.myForm.value);
    window.location.reload()
  
  }



  createModifier(){
    this.modifierService.addModifier(this.Modifier).subscribe( data =>{
      this.Modifier=data
    },
    error => console.log(error));
  }

  
  
}




