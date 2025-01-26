import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => {
            return import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule)
        }
    },
    {
        path: '',
        loadChildren: () => {
            return import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
        }
    }
];