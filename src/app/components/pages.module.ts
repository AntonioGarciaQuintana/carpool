import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { CarpoolComponent } from './carpool/carpool.component';
import { TripComponent } from './trip/trip.component';

@NgModule({
    declarations: [
        HomeComponent,
        CarpoolComponent,
        TripComponent
    ],
    exports: [
        HomeComponent,
        CarpoolComponent,
        TripComponent
    ],
    providers: [
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PAGES_ROUTES
    ],
    bootstrap: [HomeComponent]
})
export class PagesModule { }