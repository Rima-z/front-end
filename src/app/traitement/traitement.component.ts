import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { traitement } from '../models/traitement.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { traitementService } from '../services/tretement.service';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit {

  // traitement: traitement = new traitement();
  listt: any[]=[];

  searchTerm: string = '';


  constructor(private router: Router,  private traitementService: traitementService,) {
    
    
  
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
  redirectToTraitement() {
    this.router.navigate(['/traitement'], { replaceUrl: true });
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
  redirectToRapportdent() {
    this.router.navigate(['/rapportdent'], { replaceUrl: true });
  }

  ngOnInit(): void {
    this.getTraitementData();
  }
  
  getTraitementData() {
    this.traitementService.getTraitementData().subscribe(
      (response) => {
        this.listt = response; // Assuming the response is an array of objects
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }
}
