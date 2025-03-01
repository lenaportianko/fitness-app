import { Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => {
            return import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule)
        },
        data: { showHeader: false }
    },
    {
        path: '',
        loadChildren: () => {
            return import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
        },
        canActivate: [AuthGuard],
        data: { showHeader: true }
    }
];