import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from '../components/footer/footer.component';
@Component({
    selector: 'app-open-account',
    imports: [NavbarComponent,FooterComponent],
    templateUrl: './open-account.component.html',
    styleUrl: './open-account.component.css'
})
export class OpenAccountComponent {

}
