import { Injectable } from '@angular/core';
import { NutritionInfo } from '../../../core/models/nutrition-info.type';
import { nutritionInfo } from '../../../core/constants/nutrition-info';
import { CourceType } from '../../../core/models/cource-type.enum';
import { generalMenu, snackMenu } from '../../../core/constants/food-menu';
import { getRandomValue } from '../../../shared/utils/helper';
import { drinkMenu } from '../../../core/constants/drink-menu';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from '../../../shared/store/nutrition.action';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  public constructor(private store: Store<{ nutrition: NutritionInfo[] }>) { }

  public getNutritions(): Observable<NutritionInfo[]> {
    return this.store.select('nutrition');
  }

  public generatetNutrition(): NutritionInfo[] {
    const nutritions: NutritionInfo[] = [];

    nutritionInfo.forEach((nutrition: NutritionInfo) => {
      if (
        nutrition.courceType === CourceType.Snack2 ||
        nutrition.courceType === CourceType.Dinner
      ) {
        nutritions.push(nutrition);
        return;
      }

      const drink = drinkMenu[getRandomValue(0, drinkMenu.length - 1)];
      let food = null;

      if (nutrition.courceType === CourceType.Snack1) {
        food = snackMenu[getRandomValue(0, snackMenu.length - 1)];
        nutritions.push({
          ...nutrition,
          actualCalorie: drink.calorie + food.calorie,
          dishes: [food, drink]
        });
      } else {
        food = generalMenu[getRandomValue(0, generalMenu.length - 1)];
        nutritions.push({
          ...nutrition,
          actualCalorie: drink.calorie + food.calorie,
          dishes: [food, drink]
        });
      }
    });

    return nutritions;
  }

  public resetNutritions(): void {
    this.store.dispatch(reset());
  }
}
