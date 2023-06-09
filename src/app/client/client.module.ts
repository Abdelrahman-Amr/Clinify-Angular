import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientRoutingModule} from "./client-routing.module";
import { ClientHomeComponent } from './components/client-home/client-home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import { ClientLoginComponent } from './components/client-login/client-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {RouterLink, RouterOutlet} from "@angular/router";
import { MatSnackBarModule} from "@angular/material/snack-bar";
import {ClinicSearchComponent} from "./components/clinic-search/clinic-search.component";
import {SpecialtiesComponent} from "./components/client-home/specialties/specialties.component";
import {ClientSignupComponent} from "./components/client-signup/client-signup.component";
import {FeaturesComponent} from "./components/client-home/features/features.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {SharedModule} from "../shared/shared.module";
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CardComponent } from './components/search-result/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ClientCheckoutComponent } from './components/client-checkout/client-checkout.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgbCarouselModule, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ClientAppointmentComponent } from './components/client-appointment/client-appointment.component';
import { RateAppointmentComponent } from './components/rate-appointment/rate-appointment.component';
import {MatDialogModule} from "@angular/material/dialog";
import { UpdatePasswordComponent } from './components/update-profile/update-password/update-password.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UpdateUserDataComponent } from './components/update-profile/update-user-data/update-user-data.component';

@NgModule({
  declarations: [
    ClientHomeComponent,
    ClientLoginComponent,
    ClinicSearchComponent,
    SpecialtiesComponent,
    FeaturesComponent,
    ClientSignupComponent,
    SearchResultComponent,
    ClientAppointmentComponent,
    CardComponent,
    FilterComponent,
    ClientCheckoutComponent,
    RateAppointmentComponent,
    UpdateProfileComponent,
    UpdateUserDataComponent,
    UpdatePasswordComponent,
  ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        RouterLink,
        RouterOutlet,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        SharedModule,
        MDBBootstrapModule.forRoot(),
        NgbCarouselModule, NgIf, NgbPagination,
        MatDialogModule

    ],
  providers:[MatDatepickerModule]
})
export class ClientModule { }
