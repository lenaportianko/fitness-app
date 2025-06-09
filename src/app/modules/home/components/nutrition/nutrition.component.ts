import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NutritionService } from '../../services/nutrition.service';
import { NutritionInfo } from '../../../../core/models/nutrition-info.type';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.scss',
  imports: [
    CommonModule
  ]
})
export class NutritionComponent implements OnInit {

  public nutritions: NutritionInfo[] = [];

  public constructor (private nutritionService: NutritionService) {}

  public ngOnInit(): void {
    this.nutritionService.getNutritions().subscribe((nutrition: NutritionInfo[]) => {
      this.nutritions = nutrition;
    });
  }
 
}
