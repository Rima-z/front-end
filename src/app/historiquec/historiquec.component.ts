import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { historiquecService } from '../services/historiquec.service';
import { bordereauService } from '../services/bordereau.service';
import { consultationService } from '../services/consultation.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { consultation } from '../models/consultation.model';
import { bordereau } from '../models/bordereau.model';

@Component({
  selector: 'app-historiquec',
  templateUrl: './historiquec.component.html',
  styleUrls: ['./historiquec.component.css']
})
export class HistoriquecComponent implements OnInit {


  listc: any[]=[]
  listb: any[]=[]
  list: any[]=[]
  myForm: FormGroup;
  ListDataa: consultation[] = [];
  selectAll: boolean = false;
  bordereau : bordereau = new bordereau();


  constructor(private router: Router, private historiquecService: historiquecService, private bordereauService:bordereauService, private consultationService: consultationService, private formBuilder: FormBuilder  ) { 
    this.myForm = this.formBuilder.group({
      numf: [''],
      reference: [''],
      nobrec: [''],
      montant: [''],
      date : ['']
    });
    this.consultationService = consultationService;
    this.list = [];
  

  }
  validateForm(): boolean {
    const numfControl = this.myForm.get('numf');
    const referenceerenceControl = this.myForm.get('referenceerence');
    const nobrecControl = this.myForm.get('nobrec');
    const montantControl = this.myForm.get('montant');
    const dateControl = this.myForm.get('date');
  
    return (
      numfControl?.valid &&
      referenceerenceControl?.valid &&
      nobrecControl?.valid &&
      montantControl?.valid &&
      dateControl?.valid 
    ) ?? false;
  }
  




  redirectToProfil() {
    this.router.navigate(['/profil'], { replaceUrl: true });
  }
  redirectToDashboard() {
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }
  redirectToLogin() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  redirectToHistoriquec() {
    this.router.navigate(['/historiquec'], { replaceUrl: true });
  }
  redirectToTraitement() {
    this.router.navigate(['/traitement'], { replaceUrl: true });
  }
  redirectToHistoriqued() {
    this.router.navigate(['/historiqued'], { replaceUrl: true });
  }
  redirectToSugrec() {
    this.router.navigate(['/sugrec'], { replaceUrl: true });
  }

  ngOnInit(): void {
    this.getHistoriquecData();
    this.getBordereauData();
    this.getConsultationData();
  }


  getHistoriquecData() {
    this.historiquecService.getHistoriquecData().subscribe(
      (response) => {
        this.listc = response; // Assuming the response is an array of objects
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }

  getBordereauData() {
    this.bordereauService.getBordereauData().subscribe(
      (response) => {
        this.listb = response;
      },
      (error) => {
        console.error('Error fetching bordereau data:', error);
      }
    );
  }

  getConsultationData() {
    this.consultationService.getConsultationData().subscribe(
      (response) => {
        this.list = response;
      },
      (error) => {
        console.error('Error fetching Consultation data:', error);
      }
    );
  }



startDate: Date = new Date;
endDate: Date = new Date;





selectAllItems() {
  for (let item of this.ListDataa) {
    item.checked = this.selectAll;
  }
}

onItemChange(item: consultation) {
  if (!item.checked) {
    this.selectAll = false;
  } else {
    // Check if all items are checked
    // this.selectAll = this.ListDataa.every((item) => item.checked);
  }
}

deleteSelectedItems() {
  // Filter out the selected items from the ListData array
  this.list = this.list.filter(item => !item.checked);
}




onSubmit(){
  this.deleteSelectedItems();

  if (true) {
    const formData = new FormData();
    formData.append('numf', this.myForm.get('numf')?.value || '');
    formData.append('reference', '2023FACT01058');
    formData.append('nobrec', '4');
    formData.append('montant', this.myForm.get('montant')?.value || '');
    formData.append('date',  '07-06-2023');

    const bordereau: bordereau = {
      numf: this.bordereau!.numf ===0?0 : this.bordereau!.numf  ,
      reference: '2023FACT023503',
      nobrec: 2,
      montant:this.bordereau!.montant ===0?0 : this.bordereau!.montant ,
      date:  '08-05-2023'
    };
    console.log(bordereau)
    this.bordereauService.addBordereau(bordereau).subscribe(
      (response) => {
        // Handle success response
        console.log('Form submitted successfully:', response);
        window.location.reload()
        // Reset the form
        this.myForm.reset();
        close();
        this.listb.push(this.myForm.value);
        this.listb = this.listb.filter(item => !item.checked);
        
      },
      (error) => {
        // Handle error response
        console.error('Error submitting form:', error);
        this.myForm.reset();
        close();
        this.listb.push(this.myForm.value);
      }
    );
  } else {
    // Form validation failed
    console.log('Invalid form');
    this.myForm.reset();
  }
  this.myForm.reset();
}

addBordereau(){ 
  this.deleteSelectedItems();
  this.bordereauService.addBordereau(this.bordereau).subscribe( data =>{
    this.bordereau=data
  },
 
  error => console.log(error));
}








 //code mtaa tokhbiyet les données 
 showData: boolean = false;


 toggleDataVisibility() {
   this.showData = !this.showData;
 }




}

