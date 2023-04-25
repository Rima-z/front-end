import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HistoriquecComponent } from './historiquec/historiquec.component';
import { HistoriquedComponent } from './historiqued/historiqued.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { RapportdentComponent } from './rapportdent/rapportdent.component';
import { RapportopComponent } from './rapportop/rapportop.component';
import { SugrecComponent } from './sugrec/sugrec.component';
import { TraitementComponent } from './traitement/traitement.component';
import { AjoutrecComponent } from './ajoutrec/ajoutrec.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'traitement', component: TraitementComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'historiquec', component: HistoriquecComponent },
  { path: 'historiqued', component: HistoriquedComponent },
  { path: 'sugrec', component: SugrecComponent },
  { path: 'rapportop', component: RapportopComponent },
  { path: 'rapportdent', component: RapportdentComponent },
  { path: 'ajoutrec', component: AjoutrecComponent },
  { path: 'test', component: TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
