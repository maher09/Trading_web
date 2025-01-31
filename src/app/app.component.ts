import { Component, OnInit,HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ServicesSectionComponent } from "./components/services-section/services-section.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import {BePartnerComponent} from "./components/be-partner/be-partner.component";

import {  NavigationEnd } from '@angular/router';

import { BrokerComponent } from "./components/broker/broker.component";
import { RouterOutlet ,RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'; // تأكد من استيراد FormsModule


@Component({
    selector: 'app-root',
    imports: [RouterModule, RouterOutlet, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'aboshahm';
  constructor(private router: Router) {}

}
