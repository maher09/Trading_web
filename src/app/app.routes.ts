import { Routes ,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ServicePageComponent} from './service-page/service-page.component';
import {OpenAccountComponent} from './open-account/open-account.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignalsPageComponent } from './signals-page/signals-page.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicePageComponent , canActivate: [AuthGuard] },
    {path: 'openAcount', component: OpenAccountComponent},
    {path: 'login', component: LoginPageComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'signup', component: SignupPageComponent},
    {path: 'signals', component: SignalsPageComponent},
    {path: 'subscription', component: SubscriptionComponent},
    {path: 'indicator', component: IndicatorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}

