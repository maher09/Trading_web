import { Component, OnInit,HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ServicesSectionComponent } from "../components/services-section/services-section.component";
import { AboutSectionComponent } from "../components/about-section/about-section.component";
import { BePartnerComponent } from '../components/be-partner/be-partner.component';

import {  NavigationEnd } from '@angular/router';

import { BrokerComponent } from "../components/broker/broker.component";
import { RouterOutlet ,RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';




@Component({
    selector: 'app-root',
    imports: [NavbarComponent, FooterComponent, ServicesSectionComponent,
        AboutSectionComponent, BePartnerComponent,
        BrokerComponent, RouterModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

  auth: AuthService;

  constructor(private router: Router , auth: AuthService ) {
    this.auth = auth;
  }



  login() {
    this.auth.loginWithRedirect();
  }

}

