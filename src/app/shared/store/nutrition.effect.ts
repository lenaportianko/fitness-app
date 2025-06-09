import { inject, Injectable } from "@angular/core";
import * as NutritionAction from './nutrition.action';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { NutritionService } from "../../modules/home/services/nutrition.service";

@Injectable()
export class NutritionEffect {
    private actions$ = inject(Actions);
    private nutritionService = inject(NutritionService);

    public loadNutritions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(NutritionAction.load),
            map(() => 
                NutritionAction.set({data: this.nutritionService.generatetNutrition()})
            )
        )
    );
}