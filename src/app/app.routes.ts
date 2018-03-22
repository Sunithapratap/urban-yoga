import {Routes} from '@angular/router';
import {PostLoginComponent} from './master-template/post-login/post-login.component';


export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: PostLoginComponent,
        children: [{
            path: 'dashboard',
            loadChildren: './views/dashboard/dashboard.module#AppDashboardModule',
            data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
        }]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
