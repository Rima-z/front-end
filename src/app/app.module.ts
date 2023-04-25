import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TraitementComponent } from './traitement/traitement.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoriquecComponent } from './historiquec/historiquec.component';
import { HistoriquedComponent } from './historiqued/historiqued.component';
import { SugrecComponent } from './sugrec/sugrec.component';
import { RapportopComponent } from './rapportop/rapportop.component';
import { RapportdentComponent } from './rapportdent/rapportdent.component';
import { AjoutrecComponent } from './ajoutrec/ajoutrec.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    ProfilComponent,
    InscriptionComponent,
    DashboardComponent,
    TraitementComponent,
    NavbarComponent,
    HistoriquecComponent,
    HistoriquedComponent,
    SugrecComponent,
    RapportdentComponent,
    AjoutrecComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
