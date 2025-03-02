import { Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { HomeComponent } from "./modules/home/home.component";

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => {
            return import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule)
        }
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];