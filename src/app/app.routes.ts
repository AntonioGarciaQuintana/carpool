import { LoginComponent } from './components/account/login/login.component';
import { PagesComponent } from './components/pages.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    // {
    //     path: 'forgotPassword',
    //     component: ForgotPasswordComponent,
    //     data: { title: 'Forgot Password' }
    // },
    // {
    //     path: 'menusurvey/:Id',
    //     component: SurveyComponent,
    //     data: { title: 'Survey' }
    // },
    // {
    //     path: 'error',
    //     component: ErrorsComponent,
    //     data: { title: 'Error' }
    // },
    {
        path: '',
        component: PagesComponent,
        loadChildren: './components/pages.module#PagesModule'
    }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: false });
