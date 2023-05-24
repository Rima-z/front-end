import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { sugrec } from '../models/sugrec.model';
import { HttpResponse } from '@angular/common/http';
import { sugrecService } from '../services/sugrec.service';



@Component({
  selector: 'app-sugrec',
  templateUrl: './sugrec.component.html',
  styleUrls: ['./sugrec.component.css']
})
export class SugrecComponent implements OnInit {

  sugrec: sugrec = new sugrec();
  listData: any[]=[]



  constructor(private router: Router, private formBuilder: FormBuilder, private sugRecService: sugrecService, ) { 
    this.myForm = this.formBuilder.group({
      radioOption: [''],
      selectOption: [''],
      titre: [''],
      description: [''],
      file: ['']
    });
    this.sugRecService = sugRecService;
    this.listData = [];
    this.sugRecService.getSugRecData().subscribe(data => {
      this.listData = data;
      console.log(this.listData)
       });
  }

  myForm: FormGroup;
  
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


  startDate: Date = new Date;
endDate: Date = new Date;

ngOnInit(): void {
 
}


onSubmit(){
  if (this.myForm.valid) {
    const formData = new FormData();
    formData.append('radioOption', this.myForm.get('radioOption')?.value || '');
    formData.append('selectOption', this.myForm.get('selectOption')?.value || '');
    formData.append('titre', this.myForm.get('titre')?.value || '');
    formData.append('description', this.myForm.get('description')?.value || '');
    formData.append('file', this.myForm.get('file')?.value || '');
    this.sugRecService.submitForm(formData).subscribe(
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
  console.log(this.sugrec);
  this.createSugRec();
  this.myForm.reset();
  close();
  this.listData.push(this.myForm.value);
  window.location.reload()
}

/*
signup(){
  this.submited=true
  this.pharmacien.nom=this.detailUser.value.nom
  this.pharmacien.prenom=this.detailUser.value.prenom
  this.pharmacien.matricule=this.detailUser.value.matricule
  this.pharmacien.password=this.detailUser.value.password
  this.pharmacien.email=this.detailUser.value.email
 
  if (this.detailUser.invalid) {
    return;
  }
  this.pharmacien.role="PHARMACIEN"
  //console.log(this.pharmacien)

  this.InscriService.createPharmacien(this.pharmacien).subscribe(res=>{
      this.isSuccessful=true

        this.router.navigate(['/login']);
      
  },err=>{

   console.log("erreur")
  })
}
*/
createSugRec(){
  this.sugRecService.addSugRec(this.sugrec).subscribe( data =>{
    this.sugrec=data
  },
  error => console.log(error));
}

getSugRecData() {
  this.sugRecService.getSugRecData().subscribe(
    (response) => {
      this.listData = response; // Assuming the response is an array of objects
    },
    (error) => {
      console.error('Error fetching sug_rec data:', error);
    }
  );
}



deleteItem(item: any) {
  const index = this.listData.indexOf(item);
  if (index > -1) {
    this.listData.splice(index, 1);
  }
}

}
