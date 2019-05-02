import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CarpoolComponent } from './carpool/carpool.component';
import { TripComponent } from './trip/trip.component';
const pagesRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'car-pool', component: CarpoolComponent
    },
    {
        path: 'trips', component: TripComponent
    },
    { path: '**', redirectTo: '/login' }
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
