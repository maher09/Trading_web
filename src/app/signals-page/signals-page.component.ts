import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
    selector: 'app-signals-page',
    imports: [NavbarComponent, FooterComponent],
    templateUrl: './signals-page.component.html',
    styleUrl: './signals-page.component.css'
})
export class SignalsPageComponent {

}
