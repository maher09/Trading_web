import { Component } from '@angular/core';

import { RouterOutlet , RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';



@Component({
    selector: 'app-service-page',
    imports: [ NavbarComponent, FooterComponent ,RouterLink],
    templateUrl: './service-page.component.html',
    styleUrl: './service-page.component.css'
})
export class ServicePageComponent {

}



