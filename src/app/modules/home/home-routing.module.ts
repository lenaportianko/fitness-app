import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityComponent } from "./components/activity/activity.component";
import { NutritionComponent } from "./components/nutrition/nutrition.component";

const homeRoutes: Routes = [
    { path: '', redirectTo: 'activity', pathMatch: 'full' },
    { path: 'activity', component: ActivityComponent },
    { path: 'nutrition', component: NutritionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}