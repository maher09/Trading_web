import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-subscription',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

}
